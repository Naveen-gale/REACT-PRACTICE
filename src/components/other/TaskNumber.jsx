import React from 'react'

const TaskNumber = (data) => {
  return (
   <div className="flex mt-10 p-10 justify-between gap-5">
  <div className="w-[40%] bg-red-400  py-10 px-6 rounded-2xl shadow-md flex flex-col items-center justify-center">
    
    <h1 className="text-3xl font-bold text-white">
      0
    </h1>

    <p className="text-lg font-medium text-white/90 mt-2">
      Total task
    </p>

  </div>
  <div className="w-[40%] bg-red-400  py-10 px-6 rounded-2xl  shadow-md flex flex-col items-center justify-center">
    
    <h1 className="text-3xl font-bold text-white">
      0
    </h1>

    <p className="text-lg font-medium text-white/90 mt-2">
      Total task
    </p>

  </div>


  <div className="w-[40%] bg-red-400  py-10 px-6 rounded-2xl  shadow-md flex flex-col items-center justify-center">
    
    <h1 className="text-3xl font-bold text-white">
      0
    </h1>

    <p className="text-lg font-medium text-white/90 mt-2">
      Total task
    </p>

  </div>
</div>

  )
}

export default TaskNumber
