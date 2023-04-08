import React from 'react'
import MovieList from '../Component/MovieList'
import { useLocation } from 'react-router-dom'

export default function MovieDetails() {
   
   const location = useLocation()=location.state
   
  return (
    <div className='moviedetails'>
      <h1>{movie.title }</h1>
      <h1>{movie.title}</h1>
      <h1>{movie.title}</h1>


    </div>
  )
}
