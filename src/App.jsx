import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import Test3 from "./pages/Test3";
import Footer from "./components/Footer";
import LoginForm from "./pages/Login";
import SignupForm from "./pages/Signup";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import GoogleLogin from "./pages/GoogleLogin";
import PasswordReset from "./pages/PasswordReset";
import Profile from "./pages/Profile";
import TodoList from "./pages/TodoList/TodoClient";
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
        {/* <Route path="/search" element={<Home />} />  
        <Route path="/genre" element={<Genre />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<PrivateRoute><Favorites /></PrivateRoute>} /> */}
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        {/* <Route path="/ggsignup" element={<GoogleLogin />} />
        <Route path="/resetpass" element={<PasswordReset />} />
        <Route path="/profile" element={<PrivateRoute><Profile/></PrivateRoute>}/>
        <Route path="/todolist" element={<TodoList/>}/> */}
      </Routes>
      
      <Footer />
      </AuthProvider>
      
    </div>
  );
};

export default App;
