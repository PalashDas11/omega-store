import React from 'react';
import { useForm } from 'react-hook-form';

const AddInventory = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
       const url = `http://localhost:5000/inventory`;
       fetch(url, {
           method: 'POST', 
           headers: {
               'content-type':'application/json'
           },
           body: JSON.stringify(data)
       })
       .then(res => res.json())
       .then(result => console.log(result))
    };
    return (
        <div className="container">
            <form className=" w-50 mx-auto" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Name" {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder="Description" {...register("description")} />
                <input placeholder="Price" type="number" {...register("price")} />
                <input placeholder="Photo URL" type="text" {...register("img")} />
                <input placeholder="Supplier" type="text" {...register("supplier")} />
                <input placeholder="Quantity" type="text" {...register("quantity")} />
                <input className="custom-btn" placeholder="Name" type="submit" value="Add Inventory" />
            </form>

        </div>
    );
};

export default AddInventory;