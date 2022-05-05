import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleInventory = () => {
    const {inventoryId} = useParams();
    console.log(inventoryId);
    const [singleInventory, setSingleInventory] =useState({})
    useEffect( () => {
        const url =`http://localhost:5000/InventoryItem/${inventoryId}`
        console.log(url);
        fetch(url)
        .then(res => res.json())
        .then(data => setSingleInventory(data))
    }, [])
    return (
        <div>
            <h2>this is single items page:{singleInventory.name}</h2>
            
        </div>
    );
};

export default SingleInventory;