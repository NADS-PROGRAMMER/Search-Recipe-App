import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SearchRecipeRoute from './routes/SearchRecipeRoute'

function App() {
  return (
      
      <BrowserRouter>
        <Navbar />

        <Routes>

          <Route path="/" element={<SearchRecipeRoute />} />
        </Routes>
      </BrowserRouter>      
  )
}

export default App
