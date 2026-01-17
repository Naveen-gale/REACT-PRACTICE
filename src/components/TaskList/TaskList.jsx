import React from 'react'

const TaskList = (data) => {
  return (
    <div id = "tasklist" className="w-full  flex gap-5 overflow-x-auto py-4 mt-6 px-2">
  
  <div className="shrink-0 w-80 h-50 text-nowrap bg-yellow-900  rounded-2xl shadow-md">
    <div className='flex justify-between p-5 items-center px-3 py-1 '>
        <h3 className='bg-amber-400 px-3 py-1 text-sm rounded'>High</h3>
        <h4 className='text-black text-sm'>22 june 2007</h4>
    </div>
    <h2 className='mt-2 text-2xl font-black  '>Task given</h2>
    <p className=' mt-5 text-xl  text-wrap'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, voluptas!</p>
  </div>



  
  
  
  
</div>

  )
}

export default TaskList
