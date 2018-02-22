// ==============================================
// Auth Actions =================================
// ==============================================
export const LOGIN = 'LOGIN';
export const login = (uid) => ({
    type: LOGIN,
    uid
});

export const LOGOUT = 'LOGOUT';
export const logout = () => ({
    type: LOGOUT
});
