import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../img/google.png'
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorMsg;
    if (loading){
        return <Loading></Loading>
    }
    if(error){
       errorMsg =  <p className='text-danger'>Error: {error?.message}</p>
      
    }
    if(user){
        navigate('/home')
    }

    return (
        <div>
        <div className='d-flex align-items-center justify-content-center'>
            <div style={{ height: '1px' }} className='custom-primary-bg w-25'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='custom-primary-bg w-25'></div>
        </div>
       {errorMsg}
        <button
                onClick={() => signInWithGoogle()}
                className='btn d-block mx-auto my-2 '>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className="custom-primary-bg text-white p-2">Google Sign In</span>
            </button>
    </div>
    );
};

export default SocialLogin;