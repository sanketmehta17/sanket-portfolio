import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Skills from './Skills'
import Projects from './Projects'
import WorkExperience from './WorkExperience'
import About from './About'
import BackgroundPolygon from './BackgroundPolygon'
import Testimonials from './Testimonials'
import ModalTestimonial from './ModalTestimonial'

function Home() {

  const [testimonialsUpdated, setTestimonialsUpdated] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = "text/javascript";
    script.text = "document.documentElement.style.setProperty('--scroll-padding', document.getElementById('navbar').offsetHeight + 1 + 'px');";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [])


  function updateTestimonialUpdatedFlag(flag){
    setTestimonialsUpdated(flag);
  }

  return (
    <>
    <div className="App flex flex-col h-screen">
      <Navbar /> 
      <main className="bg-white flex-grow scroll-smooth">
        <Hero />
        <About />
        <BackgroundPolygon />
        <Skills />
        <BackgroundPolygon />
        <WorkExperience />
        <BackgroundPolygon />
        <Projects />
        <Testimonials testimonialUpdatedFlag = {testimonialsUpdated} />
        <ModalTestimonial testimonialFlag = {updateTestimonialUpdatedFlag} />
        <a href='/Resume.pdf' download="Sanket Mehta - Resume" className='fixed end-6 bottom-16 group'>
          <button className="p-2 bg-gray-800 text-center text-sm font-normal text-white rounded-xl shadow-lg shadow-gray-600 inline-flex hover:border-black">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mr-1 my-auto fill-current">
              <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
            </svg>
            Download Resume</button>
        </a>
      </main>
      <Footer />
    </div>
    </>
  )
}

export default Home
