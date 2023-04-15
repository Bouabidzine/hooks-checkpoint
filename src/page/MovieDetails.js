import React from "react";
import { useLocation } from "react-router-dom";

export default function MovieDetails() {
  const movie = useLocation().state;

  return (
    <div className="moviedetails">
      <h1>{movie.title}</h1>
      <h1>{movie.title}</h1>
      <h1>{movie.title}</h1>
    </div>
  );
}
