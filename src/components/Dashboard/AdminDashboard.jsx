import React from 'react'
import Header from '../other/Heder'
import Createtaskform from '../other/Createtaskform'
import AllTask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10' >
    <Header />
    <Createtaskform />
    <AllTask />



  


    </div>
  )
}

export default AdminDashboard
