import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import configureStore from './store/configureStore';

export const store = configureStore();

// Page Template
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

// Render App
let hasRendered = false;
export const renderApp = () => {
    if (!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
};

export default () => {
    // Render Loading Page
    ReactDOM.render(<LoadingPage />, document.getElementById('app'));
};
