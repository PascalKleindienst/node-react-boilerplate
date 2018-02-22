import ajax from 'fetchival';
import renderLoadingPage, { store, renderApp} from './bootstrap';
import { history } from './routers/AppRouter';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Render Loading page
renderLoadingPage();

// Authentication -> render correct page
ajax('/auth/user', { mode: 'cors', credentials: 'same-origin' }).get().then((json) => {
    if ('error' in json) {
        store.dispatch(logout());
        renderApp();
        history.push('/');
    } else {
        store.dispatch(login(json));
        renderApp();
        if (history.location.pathname === '/') {
            history.push('/dashboard');
        }
    }
});
