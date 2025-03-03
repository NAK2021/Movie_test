import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Genre from "./pages/Genre";
import Favorites from "./pages/Favorites";
import MovieDetail from "./pages/MovieDetail";
import Test3 from "./pages/Test3";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Home />} />  
        <Route path="/genre" element={<Genre />} />
        <Route path="/test3" element={<Test3 />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/favorites" element={<Favorites />} />s
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
