import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState('')
  function submitHandler(e) {
    e.preventDefault()
    console.log("submited ", name);
    setName('')
  }
  return (
    <div>
      <form onSubmit={(e)=>
      {
        submitHandler(e)
      }
      }>
        <input type="text" placeholder='name' value={name} onChange={(e)=>{
          setName(e.target.value)}}/>
        <button>submit</button>
      </form>
      
    </div>
  )
}

export default App
