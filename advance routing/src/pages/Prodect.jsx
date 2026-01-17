import React from 'react'
import { Link } from 'react-router-dom' 



const Prodect = () => {
  return (
    <div>
      <div className='flex justify-center gap-4 py-4 px-8 font-bold'>
        <Link to="/Prodect/men">men's</Link>
        <Link to="/Prodect/women">women's</Link>
      </div>
      <h1>Prodect</h1>
    </div>
  )
}

export default Prodect
