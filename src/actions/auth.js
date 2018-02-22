// ==============================================
// AUTH ACTIONS =================================
// ==============================================
import ajax from 'fetchival';

// Login
export const LOGIN = 'LOGIN';
export const login = (user) => ({
    type: LOGIN,
    user
});

// Logout
export const LOGOUT = 'LOGOUT';
export const logout = () => {
    return (dispatch) => {
        return ajax('/auth/logout', { mode: 'cors', credentials: 'same-origin' }).get().then( () => {
            dispatch({
                type: LOGOUT
            });
        });
    };
};
