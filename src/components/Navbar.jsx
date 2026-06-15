import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex items-center justify-center gap-4 mb-10 text-lg font-semibold'>
      <NavLink to="/" className={({ isActive }) => (isActive ? 'text-yellow-300' : '')}>Home</NavLink>
      <NavLink to="/recipes" className={({ isActive }) => (isActive ? 'text-yellow-300' : '')}>Recipes</NavLink>
      <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-yellow-300' : '')}>About</NavLink>
      <NavLink to="/create-recipe" className={({ isActive }) => `px-4 py-2 rounded-2xl bg-gray-500 ${isActive ? 'text-gray-900' : ''}`}>Create Recipe</NavLink>
    </div>
  )
}

export default Navbar