import { auth, googleProvider } from "../auth"; 
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function GoogleLogin() {
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
            navigate("/");
        } catch (error) {
            console.error("Google Login failed", error.message);
        }
    };

    return <button onClick={handleGoogleLogin}>Sign in with Google</button>;
}

export default GoogleLogin;
