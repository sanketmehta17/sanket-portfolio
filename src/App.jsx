import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
import WorkExperience from './components/WorkExperience'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="App flex flex-col h-screen">
      <Navbar /> 
      <main className="flex-grow scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <WorkExperience />
        {/* <Contact /> */}        
        <Projects />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App
