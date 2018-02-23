// ==============================================
// AUTH REDUCER TEST ============================
// ==============================================
import authReducer from '../../../src/reducers/auth';
import { LOGIN, LOGOUT } from '../../../src/actions/auth';

describe('my auth reducer', () => {
    const user = {
        id: 'abc123',
        name: 'John Doe',
        email: 'jd@example.com',
        picture: 'foo.png',
        provider: 'google'
    };

    test('should set default state', () => {
        const state = authReducer(undefined, { type: '@@INIT' });
        expect(state).toEqual({});
    });

    test('should set user data for login', () => {
        const action = {
            type: LOGIN,
            user
        };
        const state = authReducer({}, action);
        expect(state).toEqual(action.user);
    });

    test('should clear user for logout', () => {
        const action = {
            type: LOGOUT
        };
        const state = authReducer(user, action);
        expect(state).toEqual({ });
    });
});