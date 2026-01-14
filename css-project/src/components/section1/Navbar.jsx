import React from 'react'

const Navbar = () => {
  return (
    // Changed h-screen to h-20 (80px) or h-auto
   <div className='flex items-center justify-between py-8 px-18'>
        <h4 className='bg-black text-white uppercase px-6 py-2 rounded-full'>Target Audience</h4>
        <button className='bg-gray-200 px-6 py-2 uppercase rounded-full tracking-widest text-sm'>digital Banking Platform</button>
    </div>
  )
}

export default Navbar