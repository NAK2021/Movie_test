// const Favorites = () => {
//     return <h1 className="text-3xl p-5">Your Favorite Movies</h1>;
//   };
  
//   export default Favorites;

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Favorites = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return; // Prevent empty search

    onSearch(searchTerm); // Update global search query
    navigate("/"); // Redirect to Home to display search results
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Your Favorite Movies</h1>

     
    </div>
  );
};

export default Favorites;

