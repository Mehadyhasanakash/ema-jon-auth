import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='from-container'>
           <div>
           <h1 className='from-title'> Login</h1>
            <form >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="" placeholder='Please Your Email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="" placeholder='password' required />
            </div>
            <input className='form-submit' type="submit" value="login" />
            </form>
            <p>New to Ema-John? <Link className='form-link' to='/signup'>Create Account</Link></p>
           </div>
        </div>
    );
};

export default Login;