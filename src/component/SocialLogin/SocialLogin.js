import React from 'react';
import google from '../../img/google.png'

const SocialLogin = () => {
    return (
        <div>
        <div className='d-flex align-items-center justify-content-center'>
            <div style={{ height: '1px' }} className='custom-primary-bg w-25'></div>
            <p className='mt-2 px-2'>or</p>
            <div style={{ height: '1px' }} className='custom-primary-bg w-25'></div>
        </div>
       
        <button
                //onClick={() => signInWithGoogle()}
                className='btn d-block mx-auto my-2 '>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span className="custom-primary-bg text-white p-2">Google Sign In</span>
            </button>
    </div>
    );
};

export default SocialLogin;