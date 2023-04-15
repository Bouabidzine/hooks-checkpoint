import React from 'react';


export default function Filter(setBytitle, setByRating) {
  return (
    <div className='filter'>Filter
    <input type="text" placeholder="Filter by name" onChange={(e)=>setBytitle(e.target.value)}></input>
    <input type="number" placeholder="Filter by rating" onChange={(e)=>setByRating(e.target.value)}></input>
    <button>Subbmit</button>
    </div>
    
  )
}
