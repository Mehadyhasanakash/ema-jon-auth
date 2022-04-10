import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';


const Signup = () => {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')
    const [error,setError] = useState('')
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const nevigate = useNavigate()
    

    const handelEmail = event =>{
        setEmail(event.target.value)
    }

    const handelPassword = event =>{
        setPassword(event.target.value)
    }
    const handelConfirmPassword = event =>{
        setConfirmPassword(event.target.value)
    }
    
    const handelError = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
        setError("this is no match")
        return;
        }
        

        createUserWithEmailAndPassword(email, password);
    }

    if (user) {
        nevigate('/shop')
      }
    








    return (
        <div className='from-container'>
           <div>
           <h1 className='from-title'> SignUp</h1>
            <form onSubmit={handelError} >
            <div className="input-group">
                <label htmlFor="email">Email</label>
                <input onBlur={handelEmail} type="email" name="email" id="" placeholder='Please Your Email' required/>
            </div>
            <div className="input-group">
                <label htmlFor="password">Password</label>
                <input onBlur={handelPassword} type="password" name="password" id="" placeholder='password'required />
            </div>
            <div className="input-group">
                <label htmlFor="password">Confirm-Password</label>
                <input onBlur={handelConfirmPassword} type="password" name="confirm-password" id="" placeholder='confirm-password'required />
            </div>
            <p>{error}</p>
            <input className='form-submit' type="submit" value="login" />
            </form>
            <p>Already Signup? <Link className='form-link' to='/login'>Login</Link></p>
           </div>
        </div>
    );
};

export default Signup;