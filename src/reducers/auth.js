// ==============================================
// AUTH REDUCERS ================================
// ==============================================
import { LOGIN, LOGOUT } from '../actions/auth';

export default (state = {}, action) => {
    switch (action.type) {
    case LOGIN:
        return action.user;
    case LOGOUT:
        return {};
    default:
        return state;
    }
};
