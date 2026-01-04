import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar'

const AuthLayout = () => {
    return (
        <div className=''>
            <Navbar></Navbar>
            <Outlet/>
        </div>
    );
};

export default AuthLayout;