import React from 'react';

const ResetPassword = () => {
    return (
        <div className='container'>
            <div className='form-box'>
            <label>Email:</label>
            <input type="email" name="email" placeholder="Email" required />
            <input  type="submit" value="Reset Password" className="login-btn" />
            </div>
        </div>
    );
};

export default ResetPassword;