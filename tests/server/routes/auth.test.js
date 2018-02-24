// ========================================
// AUTH ROUTES TEST =======================
// ========================================
const request = require('supertest');
const app = require('../../../server/app');

describe('my auth routes', () => {
    test('should logout authenticated users', () => {
        app.request.logout = jest.fn();

        return request(app).get('/auth/logout').then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toMatch(/json/);
            expect(response.body).toHaveProperty('message');
            expect(app.request.logout).toHaveBeenCalled();
        });
    });

    test('should return authenticated users when user is loggedin', () => {
        app.request.user = { id: 123, username: 'John Doe', token: 'abc123' };
        app.request.isAuthenticated = jest.fn(() => true);

        return request(app).get('/auth/user').then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toMatch(/json/);
            expect(response.body).toEqual({ id: 123, username: 'John Doe' });
        });
    });

    test('should return error message when user is NOT loggedin', () => {
        app.request.isAuthenticated = jest.fn(() => false);

        return request(app).get('/auth/user').then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.type).toMatch(/json/);
            expect(response.body).toHaveProperty('error');
        });
    });
});