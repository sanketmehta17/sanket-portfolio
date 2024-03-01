import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import './App.css'
import 'aos/dist/aos.css';

function App() {

  return (
    
    <>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
