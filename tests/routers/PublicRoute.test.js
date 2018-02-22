// ==============================================
// PUBLIC ROUTE TEST ============================
// ==============================================
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import PublicRouteContainer, { PublicRoute } from '../../src/routers/PublicRoute';

const mockStore = configureMockStore([thunk]);

describe('my PublicRoute', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<PublicRoute isAuthenticated={true} />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should contain isAuthenticated information', () => {
        const store = mockStore({
            auth: { id: 1 }
        });
        const wrapper = shallow(<PublicRouteContainer store={store} />);
        expect(wrapper.props().isAuthenticated).toBe(true);
    });

    test('should not be authenticated', () => {
        const store = mockStore({
            auth: {}
        });
        const wrapper = shallow(<PublicRouteContainer store={store} />);
        expect(wrapper.props().isAuthenticated).toBe(false);
    });    
});
