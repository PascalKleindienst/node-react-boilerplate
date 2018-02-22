// ==============================================
// PUBLIC ROUTE =================================
// ==============================================
import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

// Public Route Component
export const PublicRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
        ) : (
            <Component {...props} />
        )
    )} />
);

// States
const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.id
});

export default connect(mapStateToProps)(PublicRoute);
