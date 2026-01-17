import React from 'react'
import Navbar from './componets/Navbar'
import Footer from './componets/Footer'
import Home from './pages/Home'

import Prodect from './pages/Prodect'
import Notfound from './pages/Notfound'
import about from './pages/About'
import { Link, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CoursesDetail from './pages/CoursesDetail'



const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-black text-white">
      <Navbar />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Prodect" element={<Prodect />} />
          <Route path="prodect/men" element={<Men />} />
          <Route path="Prodect/women" element={<Women />}>
        </Route>
        <Route path="/courses" element={<Courses />} />
        <Route path='/courses/:id' element={<CoursesDetail />} />
        


      
        
        
        <Route path="*" element={<Notfound />} />
      </Routes>
      
     


      {/* Main content area */}
      <div className="flex-grow flex items-center justify-center">
       
      </div>

      <Footer />
    </div>
  )
} 

export default App
