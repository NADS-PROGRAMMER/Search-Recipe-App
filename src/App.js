import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route, useLocation } from 'react-router-dom'
import SearchRecipeRoute from './routes/SearchRecipeRoute'
import About from './routes/About'
import { AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation()
  
  return (
      <>
        <Navbar />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<SearchRecipeRoute />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>    
      </>
  )
}

export default App
