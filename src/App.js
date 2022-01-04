import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom'
import SearchRecipeRoute from './routes/SearchRecipeRoute'
import { motion, AnimatePresence } from 'framer-motion'

function App() {

  const location = useLocation()
  
  return (
      <>
        <Navbar />
        <AnimatePresence>
          <Routes location={location} key={location.key}>
            <Route path="/" element={<SearchRecipeRoute />} />
            <Route path="/about" element={<h1>ABOUT</h1>} />
          </Routes>
        </AnimatePresence>    
      </>
  )
}

export default App
