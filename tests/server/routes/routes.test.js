// ========================================
// ROUTE TEST =============================
// ========================================
const request = require('supertest');
const app = require('../../../server/app');

describe('my routes', () => {
    test('should return index.html on default GET request', () => {
        return request(app).get('/some/foo/bar').then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toMatch(/html/);
            expect(response.text).toMatchSnapshot();
        });
    });
});