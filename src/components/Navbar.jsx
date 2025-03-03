import { Link, useSearchParams } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");

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
        <Link to="/" className="text-decoration-none text-light">MovieApp</Link>
      </h1>

      {/* Search Bar */}
      <div className="d-flex">
        <input type="text" className="form-control me-2" style={{ maxWidth: "400px" }}
          placeholder="Search movies..."
          value={searchTerm} onChange={handleSearchChange}
        />
        {searchTerm && (
          <button className="btn btn-outline-secondary" onClick={handleClearSearch}>
            Clear
          </button>
        )}
      </div>

      {/* Navigation Links */}
      <div>
        <Link className="btn btn-outline-light me-2" to="/genre">Genres</Link>
        <Link className="btn btn-outline-light" to="/test3">Test </Link>
      </div>
    </nav>
  );
};

export default Navbar;
