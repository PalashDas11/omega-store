import React, { useRef } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const ResetPassword = () => {
    const emailRef = useRef('');
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    if(sending){
        return <Loading></Loading>
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if(email){
            await sendPasswordResetEmail(email);
            toast('sent email');
        }else{
            toast('please enter your email address')
        }
    }

    return (
        <div className='container'>
            <div className='form-box'>
            <label>Email:</label>
            <input ref={emailRef} type="email" name="email" placeholder="Email" required />
            <input  type="submit" value="Reset Password" className="login-btn" onClick={resetPassword} />
            </div>
           
        </div>
    );
};

export default ResetPassword;