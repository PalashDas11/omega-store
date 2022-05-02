import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    return (
        <div className='container'>
            <div className="form-box">
            <div className="d-flex justify-content-center align-items-center ">
                <form>
                    <h2 className="text-center">Login</h2>
                    <label>Email:</label>
                    <input type="email" name="email" placeholder="Email" required />
                     <label>Password:</label>
                    <input type="password" name="pswd" placeholder="Password" required />
                    <input type="submit" value="Login" className="login-btn" />
                </form>

            </div>
            <div className='text-center'>
                <p>New to Omega Grocery? <Link to="/signup" className='text-primary pe-auto text-decoration-none'>Please Register</Link> </p>
                <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
            </div>
            <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;