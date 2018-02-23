// ==============================================
// PRIVATE ROUTE TEST ===========================
// ==============================================
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import PrivateRouteContainer, { PrivateRoute } from '../../../src/routers/PrivateRoute';

const mockStore = configureMockStore([thunk]);

describe('my PrivateRoute', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<PrivateRoute isAuthenticated={true} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should contain isAuthenticated information', () => {
        const store = mockStore({
            auth: { id: 1 }
        });
        const wrapper = shallow(<PrivateRouteContainer store={store} />);
        expect(wrapper.props().isAuthenticated).toBe(true);
    });

    test('should not be authenticated', () => {
        const store = mockStore({
            auth: {}
        });
        const wrapper = shallow(<PrivateRouteContainer store={store} />);
        expect(wrapper.props().isAuthenticated).toBe(false);
    });    
});
