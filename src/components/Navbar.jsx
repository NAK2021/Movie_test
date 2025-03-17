import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const { user, logout } = useAuth();

  // Handle search input change
  const handleSearchChange = (e) => {
    const value = e.target.value.trim(); 
    setSearchTerm(value);
    const newParams = new URLSearchParams(searchParams);
    value ? newParams.set("q", value) : newParams.delete("q");
    setSearchParams(newParams);
  };

  // Handle clearing the search input
  const handleClearSearch = () => {
    setSearchTerm("");
    setSearchParams(new URLSearchParams()); // Reset URL params
  };

  return (
    <nav className="navbar navbar-dark bg-dark p-3 container-fluid d-flex align-items-center justify-content-between">
      <h1 className="navbar-brand mb-0">
        <Link to="/" className="text-decoration-none text-light">Men Store</Link>
      </h1>

      {/* Search Bar */}
      {/* <div className="d-flex">
        <input type="text" className="form-control me-2" style={{ maxWidth: "400px" }}
          placeholder="Search product..."
          value={searchTerm} onChange={handleSearchChange}
        />
        {searchTerm && (
          <button className="btn btn-outline-secondary" onClick={handleClearSearch}>
            Clear
          </button>
        )}
      </div> */}

      {/* Navigation Links */}
      <div>
        {
          user ? 
          (
            <>
              <Link className="nav-link text-white" to="/profile"> Welcome, {user.displayName || user.email}!</Link>
              {/* <Link className="btn btn-outline-light me-2" to="/favorites">Favorites </Link> */}
              <button className="btn btn-danger" onClick={logout}>Logout</button>

            </>
          )
          :(
            <>
              <Link className="btn btn-outline-light me-2" to="/login">Log in</Link>
              <Link className="btn btn-outline-light me-2" to="/signup">Sign up</Link>
            </>
          )
        }
        {/* <Link className="btn btn-outline-light me-2" to="/genre">Genres</Link> */}
        {/* <Link className="btn btn-outline-light me-2" to="/test3">Test </Link> */}
        {/* <Link className="btn btn-outline-light me-2" to="/signup">Sign Up </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
