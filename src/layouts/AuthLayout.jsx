import React from 'react';
import { Outlet } from 'react-router';

const AuthLayout = () => {
    return (
        <div>
            authLayout
            <Outlet/>
        </div>
    );
};

export default AuthLayout;