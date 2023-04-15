import React from 'react';


export default function Add({add, setMovies, movies, setShow}) {
  return (
    <div className='addmovie'> 
    <input type="text" placeholder="movie name" onChange={(e)=>setMovies({...movies, title: e.target.value})}></input>
    <input type="number" value ="" placeholder="rating" onChange={(e)=>setMovies({...movies, rating: e.target.value})}></input>
    <button onClick={()=>setShow(false)}>Cancel</button>
    <button onClick={()=> {add(movies); setShow(false);}}>Add</button>
    </div>
  )
}
