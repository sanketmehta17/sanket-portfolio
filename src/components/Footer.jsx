import React from 'react';
import ContactLinks from './ContactLinks';

export default function Footer() {
  return (

  <footer className="bg-white/90 justify-stretch text-gray-800 w-full">
    
    <div className="my-5">
      <ContactLinks parent="Footer" />
    </div>
  </footer>
  );
}