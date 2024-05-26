import React from 'react';
import { useRouteError } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div style={{ textAlign: 'right' }}>
            <h1>שגיאה</h1>
            <p>מצטערים, קרתה שגיאה בלתי צפויה.</p>
            <Link to="/">חזור לעמוד הבית</Link>
        </div>
    );
};

export default ErrorPage;