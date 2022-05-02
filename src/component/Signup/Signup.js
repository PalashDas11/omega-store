import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    return (
        <div className='container'>
            <div className="form-box">
                <div className="d-flex justify-content-center align-items-center ">
                    <form>
                        <h2 className="text-center">SignUp</h2>
                        <label>Name:</label>
                        <input type="text" name="name" placeholder="Name" required />
                        <label>Email:</label>
                        <input type="email" name="email" placeholder="Email" required />
                        <label>Password:</label>
                        <input type="password" name="pswd" placeholder="Password" required />
                        <input type="submit" value="SignUp" className="login-btn" />
                    </form>

                </div>
                <div className='text-center'>
                    <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none'>Please Login</Link> </p>
                    <p>Forget Password? <button className='btn btn-link text-primary pe-auto text-decoration-none' >Reset Password</button> </p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Signup;