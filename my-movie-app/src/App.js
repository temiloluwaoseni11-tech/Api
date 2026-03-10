import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A thief steals corporate secrets through dream-sharing technology.",
      posterURL: "https://m.media-amazon.com/images/I/51oD0D23gNL._AC_.jpg",
      rating: 5,
    },
    {
      title: "Interstellar",
      description: "A team travels through a wormhole in space to ensure humanity's survival.",
      posterURL: "https://m.media-amazon.com/images/I/71n58AvbYUL._AC_SY679_.jpg",
      rating: 4,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRate, setFilterRate] = useState(0);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      movie.rating >= filterRate
  );

  return (
    <div className="App">
      <h1>My Movie App 🎬</h1>

      <Filter
        filterTitle={filterTitle}
        setFilterTitle={setFilterTitle}
        filterRate={filterRate}
        setFilterRate={setFilterRate}
      />

      <MovieList movies={filteredMovies} />

      <AddMovieForm addMovie={addMovie} />
    </div>
  );
}

function AddMovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !posterURL) return;
    addMovie({ title, description, posterURL, rating: Number(rating) });
    setTitle("");
    setDescription("");
    setPosterURL("");
    setRating(0);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "20px" }}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={posterURL}
        onChange={(e) => setPosterURL(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Rating (1-5)"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default App;