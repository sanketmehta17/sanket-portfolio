import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <div className="bg-[url('./Images/Profile.JPG')] bg-cover bg-center bg-no-repeat">
        <div className="relative isolate px-6 lg:px-8 backdrop-blur-sm pt-48 pb-4 sm:pt-64 sm:pb-6 md:pt-82 md:pb-8 lg:pt-96 lg:pb-10">
          
          <div className="mx-auto max-w-2xl py-14 sm:py-24 lg:py-32 rounded-lg bg-white/30">
              {/* <img
                src="./Images/Profile.JPG"
                alt="Profile Picture"
                className="w-32 rounded-full inline shadow-xl ring-1 ring-gray-400/10"
              />   */}
              <div className="text-center">
                <h1 className="mt-4 font-bold tracking-tight text-xl text-gray-900 sm:text-xl md:text-3xl lg:text-4xl">
                  Hi! I am a Software Developer.
                </h1>
                <p className="mt-4 text-sm sm:text-sm md:text-lg lg:text-xl leading-8 text-gray-900">
                  Thanks for taking time to look at my portfolio!
                </p>
                <div className="mt-6 flex items-center justify-center gap-x-6">
                  <a
                    href="#"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    About Me
                  </a>
                  <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
          </div>
          
          
        </div>
      </div>
  )
}
