import React from "react";

function MovieCard({ movie }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        width: "250px",
        margin: "10px",
        padding: "10px",
        textAlign: "left",
      }}
    >
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating}/5 ⭐</p>
    </div>
  );
}

export default MovieCard;