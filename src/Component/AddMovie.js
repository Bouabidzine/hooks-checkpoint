import React from 'react';


export default function Add({add, setMovie, movies, setShow}) {
  return (
    <div className='addmovie'> 
    <input type="text" placeholder="movie name" onChange={(e)=>setMovie({...movies, title: e.target.value})}></input>
    <input type="number" value ="" placeholder="rating" onChange={(e)=>setMovie({...movies, rating: e.target.value})}></input>
    <button onClick={()=>setShow(false)}>Cancel</button>
    <button onClick={()=> {Add(movies); setShow(false);}}>Add</button>
    </div>
  )
}
