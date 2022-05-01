import React, { useEffect, useState } from 'react';
import InventoryItem from '../InventoryItem/InventoryItem';
import './Inventory.css'

const Inventory = () => {
    const [inventories, setInventories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setInventories(data))
    }, [])
    return (
        <div className='container py-4'>
            <h2 className='text-center'>Inventory</h2>
           <div className="row mx-auto custom-width">
           {
                inventories.slice(0,6).map(inventory => <InventoryItem 
                     inventory ={inventory}
                     key ={inventory._id}
                     ></InventoryItem>)
            }
           </div>
        </div>
    );
};

export default Inventory;