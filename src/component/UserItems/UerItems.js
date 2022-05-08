import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const UerItems = () => {
    const [user] =useAuthState(auth);
    console.log(user);
    const [userItem, setUserItem] = useState([])
    console.log(userItem);
    useEffect(() => {
        
        const getUserItem = async () => {
          const email = user.email
         
          const url = `https://blooming-eyrie-17449.herokuapp.com/userItems?email=${email}`
          
          const {data } =await axios.get(url)
          console.log(data);
          setUserItem(data)
        }
        getUserItem();

    }, [user])
    return (
        <div>
           <h2>Your items {userItem.length}</h2>
        </div>
    );
};

export default UerItems;