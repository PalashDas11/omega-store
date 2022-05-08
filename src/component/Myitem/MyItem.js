
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import MyItemDetails from '../MyItemDetails/MyItemDetails';


const MyItem = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
    useEffect(() => {
            
            const url = `http://localhost:5000/myItem`
            fetch(url)
                .then(res => res.json())
                .then(data => setMyItems(data))
    }, [])

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        
        console.log(data);
        const url = `http://localhost:5000/myItem`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
            
        })
            .then(res => res.json())
            .then(result => toast("added sucessfully"))
           
    };

    // delete my item 
    const handleDelete = id => {
        const confirm = window.confirm("Are you sure want to delete?");
        if (confirm) {
            const url = `http://localhost:5000/myItem/${id}`
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    toast('data deleted')
                    const reamining = myItems.filter(myItem => myItem._id !== id);
                    setMyItems(reamining)
                })
        }
    }
    return (
        <div className="container py-4">
            <h2 className="text-center">Add My item </h2>
            <form className="custom-form" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <input value={user.email} placeholder="Description" {...register("description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="Photo URL" type="text" {...register("img")} />
                <input placeholder="Supplier" type="text" {...register("supplier")} />
                <input placeholder="Quantity" type="text" {...register("quantity")} />
                <input className="custom-btn" placeholder="Name" type="submit" value="Add Inventory" />
            </form>
            <h2 className="text-center py-4">This is My items list {user.length}</h2>
            <div className="row">
                {
                    myItems.map(myItem => <MyItemDetails
                        key={myItem._id}
                        myItem={myItem}
                        handleDelete={() => handleDelete(myItem._id)}

                    ></MyItemDetails>)
                }
            </div>

        </div>
    );
};

export default MyItem;