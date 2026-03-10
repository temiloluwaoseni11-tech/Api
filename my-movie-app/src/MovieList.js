import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {movies.length ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <p>No movies found 😢</p>
      )}
    </div>
  );
}

export default MovieList;