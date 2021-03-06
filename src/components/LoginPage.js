// ==============================================
// LOGIN PAGE COMPONENT =========================
// ==============================================
import React from 'react';

const LoginPage = () => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Boilderplate</h1>
            <p>Tagline for App</p>
            <p>
                <a className="button" href="/auth/twitter">Login with Twitter</a>
            </p>
            <p>
                <a className="button" href="/auth/facebook">Login with Facebook</a>
            </p>
            <p>
                <a className="button" href="/auth/google">Login with Google</a>
            </p>
        </div>
    </div>
);

export default LoginPage;
