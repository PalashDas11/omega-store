import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    // updating 
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    
    const navigate = useNavigate()
    const navigateLogin = () => {
        navigate('/login');
    }

    if(loading ||updating){
        return <Loading></Loading>
    }


    const handleSignup = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/home');
        
    }
    return (
        <div className='container'>
            <div className="form-box">
                <div className="d-flex justify-content-center align-items-center ">
                    <form onSubmit={handleSignup}>
                        <h2 className="text-center">SignUp</h2>
                        <label>Name:</label>
                        <input type="text" name="name" placeholder="Name" required />
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <label>Password:</label>
                        <input type="password" name="password" placeholder="Password" required />
                        <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                        <label className={`ps-2 ${agree ? '' : 'text-danger'}`} htmlFor="terms">Accept Our Terms and Conditions</label>
                        <p>{error}</p>
                        <input type="submit" value="SignUp" className="login-btn"  disabled={!agree} />
                    </form>

                </div>
                <div className='text-center'>
                    <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
                    <p>Forget Password? <Link to ="/resetPass" className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</Link> </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;