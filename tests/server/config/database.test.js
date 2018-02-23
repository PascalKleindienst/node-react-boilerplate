// ==============================================
// DATABASE CONFIG TEST =========================
// ==============================================
const database = require('../../../server/config/database');

describe('my database config', () => {
    test('should contain development, production and test configuration', () => {
        expect(database).toHaveProperty('development');
        expect(database).toHaveProperty('production');
        expect(database).toHaveProperty('test');
    });
    
    test('should contain development database config', () => {
        expect(database.development).toHaveProperty('username');
        expect(database.development).toHaveProperty('password');
        expect(database.development).toHaveProperty('database');
        expect(database.development).toHaveProperty('host');
        expect(database.development).toHaveProperty('dialect');
    });

    test('should contain production database config', () => {
        expect(database.production).toHaveProperty('username');
        expect(database.production).toHaveProperty('password');
        expect(database.production).toHaveProperty('database');
        expect(database.production).toHaveProperty('host');
        expect(database.production).toHaveProperty('dialect');
    });

    test('should contain test database config', () => {
        expect(database.test).toHaveProperty('username');
        expect(database.test).toHaveProperty('password');
        expect(database.test).toHaveProperty('database');
        expect(database.test).toHaveProperty('host');
        expect(database.test).toHaveProperty('dialect');
    });
});
