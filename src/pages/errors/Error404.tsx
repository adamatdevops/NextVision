import React from 'react';
import { Link } from 'react-router-dom';

const Error404 = () => {
    return (
        <div style={{ textAlign: 'right' }}>
            <h1>404</h1>
            <p>העמוד שחיפשת לא נמצא.</p>
            <Link to="/">חזור לעמוד הבית</Link>
        </div>
    );
};

export default Error404;