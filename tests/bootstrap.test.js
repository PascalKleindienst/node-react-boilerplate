// ==============================================
// BOOTSTRAP TEST ===============================
// ==============================================
jest.mock('react-dom', (jsx, el) => ({
    render: jest.fn()
}));
import React from 'react';
import renderLoadingPage, { store, renderApp} from '../src/bootstrap';
import configureStore from '../src/store/configureStore';
import LoadingPage from '../src/components/LoadingPage';


describe('my bootstrap setup', () => {

    test('should export store', () => {
        expect(store.getState()).toEqual(configureStore().getState());
    });

    test('should render app only once', () => {
        document.body.innerHTML = '<div id="app"></div>';
        const ReactDOM = require('react-dom');

        renderApp();
        renderApp();
        expect(ReactDOM.render).toHaveBeenCalledTimes(1);
    });

    test('should render loading page', () => {
        document.body.innerHTML = '<div id="app"></div>';
        const ReactDOM = require('react-dom');

        renderLoadingPage();
        expect(ReactDOM.render).toHaveBeenCalledWith(<LoadingPage />, document.getElementById('app'));
    });
});
