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
         
          const url = `http://localhost:5000/userItems?email=${email}`
          
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