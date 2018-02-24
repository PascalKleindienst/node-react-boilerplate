// ========================================
// ROUTE TEST =============================
// ========================================
const request = require('supertest');
const app = require('../../../server/app');

describe('my routes', () => {
    test('should return index.html on GET', () => {
        return request(app).get('/').then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toMatch(/html/);
            expect(response.text).toMatchSnapshot();
        });
    });
});