import React from 'react';
import { useState } from 'react';
import Add from './AddMovie';

export default function MovieCard ({movies}) {
  const [show, setShow] = useState(false);
  return (
    <div className='card' style={{ backgroundImage: `url(${movies.poster})` }} >
    MovieCard 
    <div className="movie-content">
    <img src={movies.poster} alt={movies.title} />
    <h1>{movies.title}</h1>
    <h2>{movies.description}</h2>
    <h3>{movies.rating}</h3>
    
      
        <div className="content">
        <h1>{movies.title}</h1>
        <p>Description: {movies.description} </p>
        <button onClick={(e)=> {Add(movies); setShow(true);}}>Wach</button>
        </div>
        
        
        
    
    </div>
  
</div>);
};