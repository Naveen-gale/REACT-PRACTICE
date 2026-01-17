import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-4 px-8 bg-cyan-600">
      <h2 className="text-xl font-bold">Navbar</h2>
      <div className="flex gap-8">
       
       <Link className="text-lg font-semibold hover:text-black transition" to="/about">About</Link>
        <Link className="text-lg font-semibold hover:text-black transition" to="/prodect">prodect</Link>
        <Link  className="text-lg font-semibold hover:text-black transition" to='courses'>courses</Link>

        <Link className="text-lg font-semibold hover:text-black transition" to="/">Home</Link>
      </div>
    </div>
  )
}

export default Navbar
