import React from 'react'
import RecipeCard from '../components/RecipeCard';

const Favourite = () => {
  const favourite = JSON.parse(localStorage.getItem('fav')) || [];

  // console.log(favourite[0].ingredients);
   
  if(favourite.length === 0){
    return (
      <div className='text-center mt-5'>
        <h1 className='text-3xl font-bold'>No favourite found</h1>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {favourite.map((fav) => (
        <RecipeCard key={fav.id} recipe={fav} />
      ))}
    </div>
  )
}

export default Favourite