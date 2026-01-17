import React from 'react'
import Heder from '../other/Heder'
import TaskNumber from '../other/TaskNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashbord = (data) => {
  
  return (
    <div className='p-10 bg-[#1c1c1c] h-screen  '>
      <Heder data={data} />
      <TaskNumber data = {data} />
      <TaskList data = {data}/>
    </div>
  )
}

export default EmployeeDashbord
