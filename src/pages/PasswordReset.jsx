import { useState } from "react";
import { auth, sendPasswordResetEmail } from "../auth";  
import { Navigate } from "react-router-dom";


function PasswordReset() {   

  const [error, setError] = useState('') // Reset error message  
  const [successMessage, setSuccessMessage] = useState(''); // Reset success message  
  const [email, setEmail] = useState('');  
  
  const handleResetPassword = async (e) => {  
    e.preventDefault();  
    

    try {  
      await sendPasswordResetEmail(auth, email);  
      setSuccessMessage('Password reset email sent! Please check your inbox.');  
    } catch (error) {  
      setError(error.message);  
    }   
  };  

  if (successMessage){
    return <Navigate to="/login"/>;
  }

  return (  
    <div style={{height: 1024,}}>  
      <h2>Reset Your Password</h2>  
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}  
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}  
      <form onSubmit={handleResetPassword}>  
        <div>  
          <label htmlFor="email">Email:</label>  
          <input  
            type="email"  
            id="email"  
            value={email}  
            onChange={(e) => setEmail(e.target.value)}  
            required  
          />  
        </div>  
        <button type="submit" style={{marginTop: 10}}>Reset Password</button>  
      </form>  
    </div>  
  );  
}  

export default PasswordReset;  