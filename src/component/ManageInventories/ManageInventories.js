import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import ManageDetails from '../ManageDetails/ManageDetails';

const ManageInventories = () => {
    const [manageItems, setManageItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageItems')
            .then(res => res.json())
            .then(data => setManageItems(data))
    }, [])
    const handleDelete = id => {
        const confirm = window.confirm("Are you sure want to delete?");
        if(confirm){
          const url = `http://localhost:5000/InventoryItem/${id}`
          console.log(url);
          fetch(url, {
              method:'DELETE'
          })
          .then(res => res.json())
          .then(data =>{
              toast('data deleted')
              const reamining = manageItems.filter(manageItem => manageItem._id !== id);
              setManageItems(reamining)
          })
        }
    }
    return (
        <div className="container py-4">
            <h2 className="text-center">All Manage Items</h2>
            <div>
                <div className="row mx-auto custom-width">
                    {
                        manageItems.map(manageItem => <ManageDetails
                            key={manageItem._id}
                            manageItem={manageItem}
                            handleDelete ={() => handleDelete(manageItem._id)}
                        ></ManageDetails>)
                    }
                </div>
                <div>
                  
                </div>
            </div>

        </div>
    );
};

export default ManageInventories;