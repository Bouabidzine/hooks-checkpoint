import React from "react";

import Add from "../Component/AddMovie";
import { Link } from "react-router-dom";

export default function MovieCard({ movies}) {
  
  return (
    <div className="card" style={{ backgroundImage: `url(${movies.poster})` }}>
      <div className="movie-content">
        
          <img src={movies.poster} alt="placeholder" />
          <h3> rating {movies.rating}</h3>
        
        <h1> title  {movies.title}</h1>
        <p>Description: {movies.description} </p>
        
        <Link to={`/movie/details`} state={movies}>
        <button onClick={() => Add(movies) }>
          Wach
        </button>
        </Link>
      </div>
    </div>
  );
}
