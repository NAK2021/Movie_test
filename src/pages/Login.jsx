import React, { useState } from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../auth";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PasswordReset from './PasswordReset';
import axios from 'axios';
  

const LoginForm = () => {  
    const API_URL = "http://localhost:3000/login";
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState('');  
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {  
        e.preventDefault();
        setError("");
        try {

            //Call API
            // axios.post(API_URL, { username: email, password: password })
            // .then(res => setUser(res.data))
            // .catch(err => console.error('Error log in:', err));
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/');
        } catch (error) {
            setError("Invalid email or password. Please try again.");
        }
    };  

    console.log(user);

    if (user){
        // console.log("Have user");
        navigate('/');
    }

    else{
        return (  
            <div className="container" style={{height: 1024,}}>  
                <h2 className="text-center">Login</h2>  
                <form onSubmit={handleSubmit}>  
                    <div className="mb-3">  
                        <label htmlFor="email" className="form-label">Email</label>  
                        <input   
                            type="email"   
                            className="form-control"   
                            id="email"   
                            value={email}   
                            onChange={(e) => setEmail(e.target.value)}   
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
                        />  
                    </div>  
                    <button type="submit" className="btn btn-primary">Login</button>  
                    <div style={{marginTop: 10}}>
                        <a href="/resetpass">Forget password?</a>
                    </div>
                </form>  
            </div>  
        );
    }
      
};  

export default LoginForm; 