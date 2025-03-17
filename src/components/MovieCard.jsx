const IMG_PATH = 'https://image.tmdb.org/t/p/w500/'
const MovieCard = ({ movie }) => {
    return (
      <div className="card shadow-sm">
        {movie.poster_path ? (
          <img
            src={`${IMG_PATH}${movie.poster_path}`}
            alt={movie.title}
            className="card-img-top"
          />
        ) : (
          <div className="text-center p-5 bg-light">No Image</div>
        )}
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5> 
          <h6 className="card-text">Rate: {movie.vote_average.toFixed(1)}/10</h6> 
          <h6 className="card-text">Released Year: {movie.release_date.split("-")[0]}</h6> 
        </div>
      </div>
    );
  };
  
  export default MovieCard;
  