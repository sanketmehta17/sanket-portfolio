import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [loaded, setLoaded] = useState(false);

  function stopAnimation(){
    setLoaded(true);
  }

  useEffect(() => {
    stopAnimation();
  }, [])

  return (
      <div className="bg-[url('./assets/Images/ProfileHero.JPG')] bg-cover bg-center bg-no-repeat mt-16">
        <div className="relative isolate px-6 lg:px-8 backdrop-blur-sm pt-48 pb-12 sm:pt-64 sm:pb-6 md:pt-82 md:pb-44 lg:pt-96 lg:pb-24">
          <div className={loaded ? "transition-all delay-300 translate-y-0 lg:-translate-y-16 duration-1000 ease-in-out" : "transition-all backdrop-blur-sm delay-500 translate-y-96 opacity-0 duration-700 ease-in-out"}>
            <div className="mx-auto max-w-2xl rounded-lg bg-white/30 py-14 sm:py-16 lg:py-20">
              <div className="font-bold tracking-tight uppercase text-3xl text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl px-10">SANKET MEHTA</div>
                  <h1 className="mt-4 font-bold tracking-tight text-xl text-gray-900 sm:text-xl md:text-3xl lg:text-4xl">
                    Hi! I am a Software Developer.
                  </h1>
                  <p className="mt-4 text-sm sm:text-sm md:text-lg lg:text-xl leading-8 text-gray-900">
                    Thanks for taking the time to look at my portfolio!
                  </p>
                  <div className="mt-6 flex items-center justify-center gap-x-6">                  
                    <a href="/#About" className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-300">
                      Learn more <span aria-hidden="true">→</span>
                    </a>
                  </div>
              </div>
          </div>
          
        </div>
      </div>
  )
}
