import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css'

const Inventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('https://serene-oasis-27918.herokuapp.com/inventory')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, [])
    return (
        <div className='container py-4'>
            <h2 className='text-center'>Inventory</h2>
           <div className="row mx-auto custom-width">
           {
                inventories.map(inventory => <InventoryItem 
                     inventory ={inventory}
                     key ={inventory._id}
                     ></InventoryItem>)
            }
           </div>
           <div className="pt-4 text-center">
                <Link to="/manageItems" className="custom-btn2">Manage All Items{` >>`}</Link>
    
            </div>
        </div>
    );
};

export default Inventory;