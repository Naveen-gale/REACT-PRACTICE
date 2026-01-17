import React from 'react'

const Createtaskform = () => {
  return (
     <div className="flex justify-center mt-10">
  <form className="w-full max-w-lg  p-6 rounded-2xl shadow-lg space-y-5">
    
    <h2 className="text-2xl font-bold text-center text-red-500">
      Create New Task
    </h2>

    {/* Task Title */}
    <div>
      <label className="text-sm font-semibold text-white-600">Task Title</label>
      <input
        type="text"
        placeholder="Make UI Design"
        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
      />
    </div>

    {/* Description */}
    <div>
      <label className="text-sm font-semibold text-white-600">Description</label>
      <textarea
        rows="4"
        placeholder="Describe the task..."
        className="w-full mt-1 p-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-red-300"
      ></textarea>
    </div>

    {/* Date */}
    <div>
      <label className="text-sm font-semibold text-white-600 color-white text-white ">Due Date</label>
      <input
        type="date"
        className="w-full mt-1  p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
      />
    </div>

    {/* Assigned To */}
    <div>
      <label className="text-sm font-semibold text-white-600">Assign To</label>
      <input
        type="text"
        placeholder="Employee Name"
        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
      />
    </div>

    {/* Category */}
    <div>
      <label className="text-sm font-semibold text-white-600">Category</label>
      <input
        type="text"
        placeholder="Design, Development, etc..."
        className="w-full mt-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
      />
    </div>

    {/* Button */}
    <div>
      <button
        type="submit"
        className="w-full coursor-pointer active:scale-90 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
      >
        Create Task
      </button>
    </div>
  </form>
</div>
  )
}

export default Createtaskform
