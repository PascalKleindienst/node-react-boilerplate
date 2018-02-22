// ==============================================
// APP ROUTER TEST ==============================
// ==============================================
import React from 'react';
import { shallow } from 'enzyme';
import AppRouter from '../../src/routers/AppRouter';

describe('my AppRouter', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<AppRouter />);
        expect(wrapper).toMatchSnapshot();
    });
});
