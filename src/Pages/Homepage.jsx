import React from 'react';
import Navbar from './Navbar';
import MainSection from './MainSection';
import { Outlet } from 'react-router-dom';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <MainSection></MainSection>
            
        </div>
    );
};

export default Homepage;