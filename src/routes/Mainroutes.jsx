import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipe from '../pages/Recipe'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'

const Mainroutes = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/recipes' element={<Recipe />} />
            <Route path='/recipes/details/:id' element={<SingleRecipe />} />
            <Route path='/create-recipe' element={<Create />} />
        </Routes>
    </>
  )
}

export default Mainroutes