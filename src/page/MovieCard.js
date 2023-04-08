import React from "react";
import { useState } from "react";
import Add from "../Component/AddMovie";
import { Link } from "react-router-dom";

export default function MovieCard({ movies }) {
  const [show, setShow] = useState(false);
  return (
    <div className="card" style={{ backgroundImage: `url(${movies.poster})` }}>
      <div className="movie-content">
        <Link to={`/movie/details`} state={movies}>
          <img src={movies.poster} alt={movies.title} />
          <h3>{movies.rating}</h3>
        </Link>
        <h1>{movies.title}</h1>
        <p>Description: {movies.description} </p>
        <button
          onClick={(e) => {
            Add(movies);
            setShow(true);
          }}
        >
          Wach
        </button>
      </div>
    </div>
  );
}
