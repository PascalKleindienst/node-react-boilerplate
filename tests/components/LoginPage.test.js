// ==============================================
// LOGIN PAGE TEST ==============================
// ==============================================
import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from '../../src/components/LoginPage';

describe('my Login page component', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<LoginPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
