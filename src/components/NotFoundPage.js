// ==============================================
// NOT FOUND PAGE COMPONENT =====================
// ==============================================
import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home, you are drunk!</Link>
    </div>
);

export default NotFoundPage;
