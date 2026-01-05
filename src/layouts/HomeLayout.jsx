import React from 'react';
import Header from '../shared/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../shared/Navbar';
import LeftSide from '../components/LeftSide';
import { Outlet } from 'react-router';
import RightSide from '../components/RightSide';


const HomeLayout = () => {
   
    return (
        <div>
            <header>
                 <Header/>
            </header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div style={{ display: "grid", gridTemplateColumns: "25% 50% 25%" }} className='mx-15 justify-center'>
               <LeftSide></LeftSide>
                  <Outlet/>
                <RightSide></RightSide>
            </div>
        </div>
    );
};

export default HomeLayout;