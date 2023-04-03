import React from 'react';

const MovieList = (props) => {
	return (
		<div className='image-movieList'>
			{props.movies.map((movies) => (
				<div className='image-container'>
				   <img src={movies.poster} alt='movie'></img>
				   <h1>{movies.title}</h1>
				   <h2>{movies.description}</h2>
				   <h3>{movies.rating}</h3>
				   					
				</div>
				
			))}
		</div>
	);
};

export default MovieList;