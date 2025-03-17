import React, { useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { auth } from "../auth";  
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import GoogleLogin from './GoogleLogin';



const SignupForm = () => {  
    const [username, setUsername] = useState('');  
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState('');  
    const [confirmed_password, setConfirmedPassword] = useState('');
    const navigate = useNavigate();  


    const handleSubmit = async (e) => {  
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (error) {
            console.error("Signup failed", error.message);
        }
    };  

    const ggSignUp = async () => {
        return ;
    }

    return (  
        <div className="container" style={{height:1024,}}>  
            <h2 className="text-center">Sign up</h2>  
            <form onSubmit={handleSubmit}>  
                {/* <div className="mb-3">  
                    <label htmlFor="username" className="form-label">Username</label>  
                    <input   
                        type="text"   
                        className="form-control"   
                        id="username"   
                        value={username}   
                        onChange={(e) => setUsername(e.target.value)}   
                        required  
                    />  
                </div>   */}
                <div className="mb-3">  
                    <label htmlFor="email" className="form-label">Email</label>  
                    <input   
                        type="email"   
                        className="form-control"   
                        id="email"   
                        value={email}   
                        onChange={(e) => setEmail(e.target.value)}   
                        required  
                    />  
                </div>  
                <div className="mb-3">  
                    <label htmlFor="password" className="form-label">Password</label>  
                    <input   
                        type="password"   
                        className="form-control"   
                        id="password"   
                        value={password}   
                        onChange={(e) => setPassword(e.target.value)}   
                        required  
                    />  
                </div>  
                <div className="mb-3">  
                    <label htmlFor="password" className="form-label">Confirmed Password</label>  
                    <input   
                        type="password"   
                        className="form-control"   
                        id="confirmed_password"   
                        value={confirmed_password}   
                        onChange={(e) => setConfirmedPassword(e.target.value)}   
                        required  
                    />  
                </div>  
                <button type="submit" className="btn btn-primary">Sign up</button>  
                {/* <GoogleLogin/>   */}
            </form>  
        </div>  
    );  
};  

export default SignupForm;  