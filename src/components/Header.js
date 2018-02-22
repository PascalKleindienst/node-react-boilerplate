// ==============================================
// HEADER COMPONENT==============================
// ==============================================
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';

// Header Component
export const Header = ({ logout }) => (
    <header className="header">
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to="/dashboard">
                    <h1>Boilerplate</h1>
                </Link>
                <button className="button button--link" onClick={logout}>Logout</button>
            </div>
        </div>
    </header>
);

// Dispatch Functions
const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout())
});

export default connect(undefined, mapDispatchToProps)(Header);
