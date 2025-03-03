import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchResults from "../components/SearchResults";
import useMovies from "../hooks/useMovies";


const Home = () => {
  const { movies, loading, error } = useMovies();

  return (
    <div className="container mt-4">
      <h1 className="text-center">Trending Movies</h1>

      {loading && <p className="text-center text-muted">Loading...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      <div className="row">
        <SearchResults movies={movies} />
      </div>
    </div>
  );
};

export default Home;
