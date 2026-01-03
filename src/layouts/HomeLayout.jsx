import React from 'react';
import Header from '../shared/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../shared/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                 <Header/>
            </header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className='mx-15'>
                
            </div>
        </div>
    );
};

export default HomeLayout;