// ==============================================
// AUTH CONFIG TEST =============================
// ==============================================
// Mocks
jest.mock('passport', () => ({
    serializeUser: (user, done) => user,
    deserializeUser: (user, done) =>  user,
    use: (cb) => cb
}));
jest.mock('passport-twitter', () => ({
    Strategy: jest.fn((config, callback) => callback())
}));
jest.mock('passport-facebook', () => ({
    Strategy: jest.fn((config, callback) => callback())
}));
jest.mock('passport-google-oauth', () => ({
    OAuth2Strategy: jest.fn((config, callback) => callback())
}));

// Dependencies
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const setupPassport = require('../../../server/config/passport');

describe('my passport config', () => {
    // =========================================================================
    // User Profile Data =======================================================
    // =========================================================================
    const profileData = {
        emails: [ { value: 'jd@example.com' }],
        displayName: 'John Doe',
        name: { givenName: 'John', familyName: 'Doe' },
        photos: [ { value: 'some-photo.jpg' }]
    };

    // =========================================================================
    // Creation Of Mocks =======================================================
    // =========================================================================
    const createStrategyMock = (done = (err, data) => {}) => {
        return jest.fn((config, callback) => {
            return callback('token', 'refreshToken', profileData, done);
        });
    };

    const createUserProviderMock = (provider) => {
        return jest.fn(() => ({
            findOne: (selector) => {
                expect(selector).toEqual({
                    where: { provider, 'email': profileData.emails[0].value } // Checks if correct provider was used
                });

                return new Promise((resolve, reject) => resolve());
            }
        }));
    };

    // Create Strategy Mocks before each test
    beforeEach(() => {
        TwitterStrategy.mockImplementation(jest.fn((config, callback) => {}));
        FacebookStrategy.mockImplementation(jest.fn((config, callback) => {}));
        GoogleStrategy.mockImplementation(jest.fn((config, callback) => {}));
    });

    // =========================================================================
    // Test Strategies =========================================================
    // =========================================================================
    test('should setup TwitterStrategy', () => {
        TwitterStrategy.mockImplementation(createStrategyMock());
        setupPassport(passport, createUserProviderMock('twitter')());
    });

    test('should setup FacebookStrategy', () => {
        FacebookStrategy.mockImplementation(createStrategyMock());
        setupPassport(passport, createUserProviderMock('facebook')());
    });

    test('should setup GoogleStrategy', () => {
        GoogleStrategy.mockImplementation(createStrategyMock());
        setupPassport(passport, createUserProviderMock('google')());
    });

    
    // =========================================================================
    // Test User Authentication ================================================
    // =========================================================================
    test('should default to undefined on missing profile photos', (done) => {
        // User data to test
        const data = {
            emails: [ { value: 'jd@example.com' }],
            displayName: 'John Doe',
            name: { givenName: 'John', familyName: 'Doe' }
        };

        // Mock Strategies
        const callbackFn = jest.fn(
            (config, callback) => (callback('token', 'refreshToken', data, () => { done() }))
        );

        TwitterStrategy.mockImplementation(callbackFn);
        FacebookStrategy.mockImplementation(callbackFn);
        GoogleStrategy.mockImplementation(callbackFn);
        
        // Mock User and check if picture is undefined
        const mockUser = jest.fn(() => ({
            findOne: (selector) => new Promise((resolve, reject) => resolve()),
            create: (data) => {
                expect(data.picture).toBe(undefined);
                return new Promise((resolve, reject) => resolve())
            }
        }));
       
        setupPassport(passport, mockUser());
    });
    
    test('should log in user on successfull authentication', (done) => {
        TwitterStrategy.mockImplementation(createStrategyMock((err, data) => {
            expect(err).toBeNull();
            expect(data).toEqual(profileData);
            done();
        }));

        const mockUser = jest.fn(() => ({
            findOne: (selector) => new Promise((resolve, reject) => resolve(profileData)),
        }));
        setupPassport(passport, mockUser());
    });

    test('should create new user on unsuccessfull authentication', (done) => {
        TwitterStrategy.mockImplementation(createStrategyMock((err, data) => {
            expect(err).toBeNull();
            expect(data).toEqual({
                "email": profileData.emails[0].value,
                "name": profileData.displayName,
                "picture": profileData.photos[0].value,
                "provider": "twitter",
                "token": "token",
            });
            done();
        }));

        const mockUser = jest.fn(() => ({
            findOne: (selector) => new Promise((resolve, reject) => resolve()),
            create: (data) => new Promise((resolve, reject) => resolve(data))
        }));
        setupPassport(passport, mockUser());
    });

    test('should fail on unsuccessfull user creation', (done) => {
        TwitterStrategy.mockImplementation(createStrategyMock((err, data) => {
            expect(err).toBeNull();
            expect(data).toBe(false);
            done();
        }));

        const mockUser = jest.fn(() => ({
            findOne: (selector) => new Promise((resolve, reject) => resolve()),
            create: (data) => new Promise((resolve, reject) => resolve())
        }));
        setupPassport(passport, mockUser());
    });

    test('should abort on db operation', (done) => {
        TwitterStrategy.mockImplementation(createStrategyMock((err, data) => {
            expect(err).toBe('error');
            done();
        }));

        const mockUser = jest.fn(() => ({
            findOne: (selector) => new Promise((resolve, reject) => reject('error')),
        }));
        setupPassport(passport, mockUser());
    });
});