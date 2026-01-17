import React, { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState("")
  const [details, setDetails] = useState("")
  const [tasks, setTasks] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    if (!title || !details) return alert("Fill both fields")

    setTasks([...tasks, { title, details }])
    setTitle("")
    setDetails("")
  }

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks)
  }

  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col lg:flex-row p-5 gap-5">

      {/* Form */}
      <form 
        onSubmit={submitHandler}
        className="lg:w-1/2 bg-zinc-800 p-6 rounded-xl space-y-4"
      >
        <h2 className="text-2xl font-bold">Add Task</h2>

        <input
          type="text"
          placeholder="Enter task title"
          className="w-full px-4 py-2 rounded bg-zinc-700 outline-none"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Enter task details"
          className="w-full px-4 py-2 h-28 rounded bg-zinc-700 outline-none"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <button className="w-full bg-white text-black py-2 rounded font-semibold">
          Add Task
        </button>
      </form>

      {/* Notes */}
      <div className="lg:w-1/2 bg-zinc-800 p-6 rounded-xl">
        <h1 className="text-2xl font-bold mb-4">Your Notes</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {tasks.map((elem, index) => (
            <div 
              key={index}
              className="bg-amber-100 text-black p-4 rounded-xl flex flex-col justify-between"
            >
              <div>
                <h3 className="font-bold text-lg">{elem.title}</h3>
                <p className="text-sm mt-2">{elem.details}</p>
              </div>

              <button
                onClick={() => deleteTask(index)}
                className="mt-4 bg-red-500 text-white py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default App
