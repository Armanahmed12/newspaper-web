import React from 'react';
import Header from '../shared/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../shared/Navbar';
import LeftSide from '../components/LeftSide';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                 <Header/>
            </header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div style={{ display: "grid", gridTemplateColumns: "25% 50% 25%" }} className='mx-15 items-center justify-center'>
                <LeftSide></LeftSide>
                  <Outlet/>
            </div>
        </div>
    );
};

export default HomeLayout;