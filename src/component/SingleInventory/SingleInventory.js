import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleInventory = () => {
    const { inventoryId } = useParams();
    console.log(inventoryId);
    const [singleInventory, setSingleInventory] = useState({})
    useEffect(() => {
        const url = `https://serene-oasis-27918.herokuapp.com/InventoryItem/${inventoryId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleInventory(data))
    }, [])
    return (
        <div className="container vh-100">
            <div className=" row align-items-center">
                <div className="col-sm-12 col-md-6 col-lg-4">
                    <img src={singleInventory.img} alt="" />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-8">
                    <h2 className="text-danger">${singleInventory.price}</h2>
                    <h5>Name: {singleInventory.name}</h5>
                    <p>{singleInventory.description}</p>
                    <p>Supplier: {singleInventory.supplier}</p>
                    <p>Quantity: {singleInventory.quantity}</p>

                    <input type="text" className="w-75" />
                    <button className='custom-btn'>Add Quantity</button>
                    <div>
                        <button className='custom-btn mt-2'>Delivered</button>

                    </div>
                </div>
            </div>
            <div className="pt-4 text-center">
                <Link to="/manageItems" className="custom-btn2">Manage All Items{` >>`}</Link>
    
            </div>
        </div>
    );
};

export default SingleInventory;