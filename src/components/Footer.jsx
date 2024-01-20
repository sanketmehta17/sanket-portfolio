import React from 'react';
import ContactLinks from './ContactLinks';

export default function Footer() {
  return (

  <footer className="bg-neutral-200 justify-stretch text-white dark:bg-neutral-600 w-full">
    
    <div className="my-5">
      <ContactLinks />
    </div>
  </footer>
  );
}