// ==============================================
// HEADER PAGE TEST =============================
// ==============================================
// Mocks
import ajax from 'fetchival';
jest.mock('fetchival');

// Dependencies
import React from 'react';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import HeaderContainer, { Header } from '../../src/components/Header';
import { logout } from '../../src/actions/auth';

const mockStore = configureMockStore([thunk]);

describe('my header component', () => {
    let wrapper, store;

    beforeEach(() => {
        ajax.mockImplementation(() => ({
            get: jest.fn(() => new Promise((resolve, reject) => {
                resolve({ id: 1 });
            }))
        }));

        store = mockStore({
            auth: { picture: 'foo.png' }
        });
        
        wrapper = shallow(<HeaderContainer store={store} />);
    });

    test('should render correctly', () => {
        const wrapper = shallow(<Header logout={() => {}} auth={ {picture: 'foo.png'} } />);
        expect(wrapper).toMatchSnapshot();
    });
    
    test('should call logout on button click', () => {
        const logout = jest.fn();
        const wrapper = shallow(<Header logout={logout} auth={ {picture: 'foo.png'} } />);
        
        wrapper.find('.logout').simulate('click');
        expect(logout).toHaveBeenCalled();
    });

    test('should contain auth information', () => {
        expect(wrapper.props().auth).toEqual({ picture: 'foo.png' });
    });

    test('should logout when button is clicked', () => {
        return store.dispatch(wrapper.props().logout).then(() => {
            const actions = store.getActions();
            expect(actions[0]).toEqual({ type: 'LOGOUT' });
        });
    });
});
