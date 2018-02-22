import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ajax from 'fetchival';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import configureStore from './store/configureStore';
import { login, logout } from './actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// Page Template
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Render App
let hasRendered = false;
const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

// Load Expenses and render page
ReactDOM.render(<LoadingPage />, document.getElementById('app'));

// Authentication
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
