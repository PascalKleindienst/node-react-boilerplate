// ==============================================
// AUTH CONFIG TEST =============================
// ==============================================
const auth = require('../../../server/config/auth');

describe('my auth config', () => {
    test('should contain twitterAuth configuration', () => {
        expect(auth.twitterAuth).toHaveProperty('consumerKey');
        expect(auth.twitterAuth).toHaveProperty('consumerSecret');
        expect(auth.twitterAuth).toHaveProperty('callbackURL');
        expect(auth.twitterAuth).toHaveProperty('userProfileURL');
    });
    
    test('should contain googleAuth configuration', () => {
        expect(auth.googleAuth).toHaveProperty('clientID');
        expect(auth.googleAuth).toHaveProperty('clientSecret');
        expect(auth.googleAuth).toHaveProperty('callbackURL');
    });

    test('should contain facebookAuth configuration', () => {
        expect(auth.facebookAuth).toHaveProperty('clientID');
        expect(auth.facebookAuth).toHaveProperty('clientSecret');
        expect(auth.facebookAuth).toHaveProperty('callbackURL');
        expect(auth.facebookAuth).toHaveProperty('profileURL');
        expect(auth.facebookAuth).toHaveProperty('profileFields');
    });
});
