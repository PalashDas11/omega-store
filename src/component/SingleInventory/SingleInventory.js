import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SingleInventory = () => {
    const { inventoryId } = useParams();
    console.log(inventoryId);
    const [singleInventory, setSingleInventory] = useState({})

 

      const deliverd=()=>{

        const url = `https://blooming-eyrie-17449.herokuapp.com/InventoryItem/${inventoryId}`
        
        fetch(url, {
            method: 'PUT', 
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(singleInventory)
        })
        .then(res => res.json())
        .then(result => setSingleInventory(result))
            
      }

  const deliverdIncrease = () => {
      
    const inputValue = parseFloat(document.getElementById("increse").value);
    

    fetch(`https://blooming-eyrie-17449.herokuapp.com/singleItems/${inventoryId}`, {
        method:'PUT',
        headers:{
            'content-Type': 'application/json'
        },
        body:`{"amount":${inputValue || 2}}`
    })
    .then(res => res.json())
    .then(data => {
        setSingleInventory(data)
            
    })
  }





    useEffect(() => {
        const url = `https://blooming-eyrie-17449.herokuapp.com/InventoryItem/${inventoryId}`
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleInventory(data))
    }, [])
    return (
        <div className="container py-4 vh-100">
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

                    <input type="text"  id="increse"  className="w-75" />
                    <button className='custom-btn' onClick={deliverdIncrease} >Add Quantity</button>
                    <div>
                        <button className='custom-btn mt-2' onClick={deliverd}>Delivered</button>

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