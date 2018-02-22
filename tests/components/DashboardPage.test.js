// ==============================================
// DASHBOARD PAGE TEST ==========================
// ==============================================
import React from 'react';
import { shallow } from 'enzyme';
import DashboardPage from '../../src/components/DashboardPage';

describe('my dashboard page component', () => {
    test('should render correctly', () => {
        const wrapper = shallow(<DashboardPage />);
        expect(wrapper).toMatchSnapshot();
    });
});
