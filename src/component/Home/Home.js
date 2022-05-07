import React from 'react';
import Hero from '../Hero/Hero';
import Inventory from '../Inventory/Inventory';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        
        <div>
            <Hero></Hero>
            <Inventory></Inventory>
            <Popular></Popular>
            
        </div>
    );
};

export default Home;