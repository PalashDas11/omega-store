import React from 'react';
import About from '../About/About';
import Hero from '../Hero/Hero';
import Inventory from '../Inventory/Inventory';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        
        <div>
            <Hero></Hero>
            <Inventory></Inventory>
            <Popular></Popular>
            <About></About>
            
        </div>
    );
};

export default Home;