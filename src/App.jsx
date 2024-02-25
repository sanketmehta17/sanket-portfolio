import { useEffect, useState } from 'react'
import {BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./components/Home";
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/api")
    .then((res) => res.json())
    .then((data) => setData(data.message));
  }, []);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.text = "document.documentElement.style.setProperty('--scroll-padding', document.getElementById('navbar').offsetHeight + 1 + 'px');";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  })

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
