// ==============================================
// APP TEST =====================================
// ==============================================
const app = require('../../server/app');

describe('my server app', () => {
    test('should setup models', () => {
        expect(app.locals).toHaveProperty('models');
    });

    test('should load user model', () => {
        expect(app.locals.models).toHaveProperty('User');
    });
});
