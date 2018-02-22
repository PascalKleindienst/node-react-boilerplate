// =========================================================================
// Setup Passport with different Strategies ================================
// =========================================================================
//
// load all the things we need
const TwitterStrategy  = require('passport-twitter').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy   = require('passport-google-oauth').OAuth2Strategy;
const configAuth       = require('./auth');

/**
 * Setup Passport
 * @param  {Object} passport
 * @param  {Object} User
 */
const setupPassport = (passport, User) => {
    // =========================================================================
    // Return existing User or create a new user account========================
    // =========================================================================
    const onAuth = ({ provider, email, name, picture, displayName, token }, done) => {
        User.findOne({ where: { provider, email } })
            .then((user) => {
                // if the user is found then log them in
                if (user) {
                    return done(null, user); // user found, return that user
                }

                // save our user into the database
                User.create({ provider, email, name, picture, displayName, token }).then((newUser) => {
                    if (newUser) {
                        return done(null, newUser);
                    }

                    return done(null, false);
                });
            })
            .catch(err => done(err));
    };

    // =========================================================================
    // De-/Serialize User information============================================
    // =========================================================================
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        User.findById(id)
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    // =========================================================================
    // TWITTER =================================================================
    // =========================================================================
    passport.use(new TwitterStrategy(configAuth.twitterAuth, (token, tokenSecret, profile, done) => {
        process.nextTick(() => {
            const data = {
                provider: 'twitter',
                email: profile.emails[0].value,
                name: profile.displayName,
                picture: profile.photos ? profile.photos[0].value.replace('_normal', '') : undefined,
                token
            };
            return onAuth(data, done);
        });
    }));

    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    passport.use(new FacebookStrategy(configAuth.facebookAuth, (token, refreshToken, profile, done) => {
        process.nextTick(() => {
            const data = {
                provider: 'facebook',
                email: profile.emails[0].value,
                name: profile.name.givenName + ' ' + profile.name.familyName,
                picture: profile.photos ? profile.photos[0].value : undefined,
                token
            };
            return onAuth(data, done);
        });
    }));

    // =========================================================================
    // GOOGLE ==================================================================
    // =========================================================================
    passport.use(new GoogleStrategy(configAuth.googleAuth, (token, refreshToken, profile, done) => {
        process.nextTick(() => {
            const data = {
                provider: 'google',
                email: profile.emails[0].value, // pull the first email
                name: profile.displayName,
                picture: profile.photos ? profile.photos[0].value.replace(/\?sz=\d+/gi, '') : undefined,
                token
            };
            return onAuth(data, done);
        });
    }));
};

// Export
module.exports = setupPassport;
