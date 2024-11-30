import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import { HomePage } from './ScreenComponents/HomePage'
import { NavBar } from './Components/NavBar'
import { Footer } from './Components/Footer'

function App() {
  

  return (
    <>
     <BrowserRouter>
     <NavBar />
     <Routes>
      <Route path="/" element={<HomePage />} /> 
     </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
