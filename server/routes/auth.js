// ==================================================
// Setup Auth Routes ================================
// ==================================================

/**
 * Setup Auth Routes
 * @param  {Object} app
 * @param  {Object} passport
 */
module.exports = (app, passport) => {
    const redirects = {
        successRedirect : '/dashboard',
        failureRedirect : '/'
    };

    // =========================================
    // GENERAL AUTH ROUTES =====================
    // =========================================
    app.get('/logout', (req, res) => {
        req.logout();
        res.redirect('/');
    });

    app.get('/auth/user', (req, res) => {
        if (req.isAuthenticated()) {
            req.user.token = undefined;
            return res.json(req.user);
        }

        return res.json({ error: 'User is not authenticated' });
    });

    // =====================================
    // FACEBOOK ROUTES =====================
    // =====================================
    app.get('/auth/facebook', passport.authenticate('facebook', { scope : ['public_profile', 'email'] }));
    app.get('/auth/facebook/callback', passport.authenticate('facebook', redirects));

    // =====================================
    // TWITTER ROUTES ======================
    // =====================================
    app.get('/auth/twitter', passport.authenticate('twitter'));
    app.get('/auth/twitter/callback', passport.authenticate('twitter', redirects));

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    app.get('/auth/google', passport.authenticate('google', { scope : ['profile', 'email'] }));
    app.get('/auth/google/callback', passport.authenticate('google', redirects));
};
