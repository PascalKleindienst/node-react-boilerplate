// ==============================================
// HEADER COMPONENT==============================
// ==============================================
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

// Header Component
export const Header = ({ auth, logout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Boilerplate</h1>
                </Link>
                <div className="profile has-dropdown">
                    <img src={ auth.picture } alt="" className="profile__picture" />
                    <div className="dropdown-menu">
                        <div className="dropdown-menu__header">
                            <strong>Account</strong>
                        </div>
                        <Link className="dropdown-menu__item" to="/profile">
                            Profile
                        </Link>
                        <Link className="dropdown-menu__item" onClick={logout} to="#">
                            Logout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

// PropTypes
Header.propTypes = {
    auth: PropTypes.shape({
        picture: PropTypes.string.isRequired,
    }),
    logout: PropTypes.func.isRequired
};

// States
const mapStateToProps = (state) => ({
    auth: state.auth
});

// Dispatch Functions
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
