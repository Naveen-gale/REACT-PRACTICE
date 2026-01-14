import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-cyan-600 py-4 px-8 text-center">
      <h2 className="text-lg font-bold">Footer</h2>
      <p className="text-sm opacity-80">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
