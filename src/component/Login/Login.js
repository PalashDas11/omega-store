import React, { useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";


    // sign in user 
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if(loading){
        return <Loading></Loading>
    }

    if(user){
        navigate(from, {replace:true})
    }
    if(error){
        return <p className='text-danger h3 container'>Error: {error?.message}</p>
    }
   
    const handleLogin = (event)=>{
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='container'>
            <div className="form-box">
            <div className="d-flex justify-content-center align-items-center ">
                <form onSubmit={handleLogin}>
                    <h2 className="text-center">Login</h2>
                    <label>Email:</label>
                    <input  ref={emailRef} type="email" name="email" placeholder="Email" required />
                     <label>Password:</label>
                    <input  ref={passwordRef} type="password" name="pswd" placeholder="Password" required />
                    {error}
                    <input  type="submit" value="Login" className="login-btn" />
                </form>

            </div>
            <div className='text-center'>
                <p>New to Omega Grocery? <Link to="/signup" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
                <p>Forget Password? <Link to="/resetPass" className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</Link> </p>
            </div>
            <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;