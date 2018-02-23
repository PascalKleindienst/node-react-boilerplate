// ==============================================
// AUTH ACTION TEST =============================
// ==============================================
// Mocks
import ajax from 'fetchival';
jest.mock('fetchival');

// Dependencies
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { LOGIN, login, LOGOUT, logout } from '../../../src/actions/auth';

const createMockStore = configureMockStore([thunk]);

describe('my auth action', () => {
    const user = {
        id: 'abc123',
        name: 'John Doe',
        email: 'jd@example.com',
        picture: 'foo.png',
        provider: 'google'
    };

    test('should generate login action object', () => {
        ajax.mockImplementation(() => ({
            get: jest.fn(() => new Promise((resolve, reject) => {
                resolve(user);
            }))
        }));

        expect(login(user)).toEqual({
            type: LOGIN,
            user
        });
    });
    
    test('should generate logout action object', () => {
        const store = createMockStore({ auth: user});

        store.dispatch(logout()).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({
                type: LOGOUT,
            });
        });
    });    
});
