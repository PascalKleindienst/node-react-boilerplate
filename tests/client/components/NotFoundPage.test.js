// ==============================================
// NOT FOUND PAGE TEST ==========================
// ==============================================
import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../../src/components/NotFoundPage';

describe('my NotFoundPage component', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<NotFoundPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
