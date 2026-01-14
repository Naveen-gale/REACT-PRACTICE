import React from 'react'
import Navbar from '../section1/Navbar'; // Ensure the path matches your folder structure
import Page1Content from './Page1Content';

const Section1 = () => {
  return (
    <div className='h-screen w-full'>
      <Navbar />
      <Page1Content />
      
    </div>
  )
}

export default Section1