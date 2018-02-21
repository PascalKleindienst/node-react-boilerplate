// =========================================================================
// Configuration for different Auth Providers===============================
// =========================================================================
module.exports = {
    // https://apps.twitter.com/
    'twitterAuth' : {
        'consumerKey'    : process.env.TWITTER_CONSUMER_KEY,
        'consumerSecret' : process.env.TWITTER_CONSUMER_SECRET,
        'callbackURL'    : process.env.TWITTER_CALLBACK_URL,
        'userProfileURL' : 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
    },

    // https://console.developers.google.com/apis/credentials
    'googleAuth' : {
        'clientID'     : process.env.GOOGLE_CLIENT_ID,
        'clientSecret' : process.env.GOOGLE_CLIENT_SECRET,
        'callbackURL'  : process.env.GOOGLE_CALLBACK_URL
    },

    // https://developers.facebook.com/
    'facebookAuth' : {
        'clientID'      : process.env.FACEBOOK_CLIENT_ID,
        'clientSecret'  : process.env.FACEBOOK_CLIENT_SECRET,
        'callbackURL'   : process.env.FACEBOOK_CALLBACK_URL,
        'profileURL'    : 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
        'profileFields' : ['id', 'email', 'name'] // For requesting permissions from Facebook API
    },
};
