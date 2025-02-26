import './App.css'
import TinhToan from './components/TinhToan'
import React from 'react'
import Home from './components/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tinh-toan" element={<TinhToan />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
