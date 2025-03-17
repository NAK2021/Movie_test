import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import GoogleLogin from "./pages/GoogleLogin";
import PasswordReset from "./pages/PasswordReset";
import Profile from "./pages/Profile";
import HomeProduct from "./pages/Midterm/HomeProduct";
import DetailProduct from "./pages/Midterm/DetailProduct/DetailProduct";

const App = () => {
  return (
    
    <div>
      <AuthProvider>
      <Navbar />  
      
      <Routes>
        <Route path="/" element={<PrivateRoute><HomeProduct /></PrivateRoute>} />
        <Route path="/product/detail/:id" element={<PrivateRoute><DetailProduct /></PrivateRoute>} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
         <Route path="/ggsignup" element={<GoogleLogin />} />
        <Route path="/resetpass" element={<PasswordReset />} />
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
      </Routes>
      
      <Footer />
      </AuthProvider>
      
    </div>
  );
};

export default App;
