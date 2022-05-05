import React, { useEffect, useState } from 'react';
import ManageDetails from '../ManageDetails/ManageDetails';

const ManageInventories = () => {
    const [manageItems, setManageItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/manageItems')
            .then(res => res.json())
            .then(data => setManageItems(data))
    }, [])
    return (
        <div className="container py-4">
            <h2 className="text-center">All Manage Items</h2>
            <div>
                <div className="row mx-auto custom-width">
                    {
                        manageItems.map(manageItem => <ManageDetails
                            key={manageItem._id}
                            manageItem={manageItem}
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