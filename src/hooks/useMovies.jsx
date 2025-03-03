import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q") || "";

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      setError(null);

      const API_URL = searchQuery
        ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`
        : `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;

      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        setMovies(data.results || []);
      } catch (err) {
        console.error("Error fetching movies:", err);
        setError(err.message);
        setMovies([]); // Clear movies on error
      }

      setLoading(false);
    };

    fetchMovies();
  }, [searchQuery]);

  return { movies, loading, error };
};

export default useMovies;
