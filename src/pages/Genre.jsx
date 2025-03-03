import { useState, useEffect } from "react";
import SearchResults from "../components/SearchResults";
import useMovies from "../hooks/useMovies";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const Genre = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const { movies, loading, error, fetchMovies } = useMovies(selectedGenre);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const res = await fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`);
        if (!res.ok) throw new Error("Failed to fetch genres");
        const data = await res.json();
        setGenres(data.genres || []);
      } catch (err) {
        console.error("Error fetching genres:", err);
      }
    };

    fetchGenres();
  }, []);

  const handleGenreChange = (event) => {
    setSelectedGenre(event.target.value);
  };

  const filteredMovies = movies.filter((movie) =>
    (selectedGenre ? movie.genre_ids.includes(Number(selectedGenre)) : true) &&
    (releaseYear ? movie.release_date.startsWith(releaseYear) : true)
  );

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Movies by Genre</h1>
      
      {/* Genre Selection */}
      <div className="mb-3">
        <select value={selectedGenre} onChange={handleGenreChange} className="form-select w-auto">
          <option value="">-- Select a Genre --</option>
          {genres.map((genre) => (
            <option key={genre.id} value={genre.id}>{genre.name}</option>
          ))}
        </select>
      </div>
      
      {/* Filtering */}
      <div className="row mb-4">
        <div className="col-md-6 w-auto">
          <label className="form-label">Release Year</label>
          <input
            type="number"
            className="form-control"
            value={releaseYear}
            onChange={(e) => setReleaseYear(e.target.value)}
            min="1900"
            max={new Date().getFullYear()}
          />
        </div>
      </div>
      
      {/* Error Handling */}
      {loading && <p className="text-center text-muted">Loading...</p>}
      {error && <div className="alert alert-danger">{error}</div>}

      {/* Movie List */}
      <div className="row">
        <SearchResults movies={filteredMovies} />
      </div>
    </div>
  );
};

export default Genre;
