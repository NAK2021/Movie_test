// src/components/SearchResults.jsx
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const SearchResults = ({ movies }) => {
  return (
    <div className="row">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div key={movie.id} className="col-md-3 mb-4">
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))
      ) : (
        <p className="text-center text-muted">No movies found.</p>
      )}
    </div>
  );
};

export default SearchResults;
