import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='NavBar'>
    <Link to ="/Filter">
        <p>Filter</p>
    </Link>
    <Link to ="/AddMovie">
        <p>AddMovie</p>
    </Link>
    <Link to ="/MovieCard">
        <p>MovieCard</p>
    </Link>
    <Link to ="/MovieList">
        <p>MovieList</p>
    </Link>
    <Link to ="/movie/detals">
      <p>MovieDetails</p>
    </Link>


    </div>
  )
}
