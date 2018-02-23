// ==============================================
// LOADING PAGE TEST ============================
// ==============================================
import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../../src/components/LoadingPage';

describe('my LoadingPage component', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<LoadingPage />);
        expect(wrapper).toMatchSnapshot();
    });
});