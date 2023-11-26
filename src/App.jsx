import React from 'react'
import {  Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import PokedexPage from './pages/PokedexPage'
import PokeInfoPage from './pages/PokeInfoPage'
import ProtectedRoutes from './pages/ProtectedRoutes'

export const App = () => {

 

  return (
    <div>
      <Routes>
        <Route path= '/' element={<HomePage/>}/>
        <Route element={<ProtectedRoutes/>}>
          <Route path='/pokedex' element={<PokedexPage/>}/>
          <Route path='/pokedex/:id' element={<PokeInfoPage/>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App