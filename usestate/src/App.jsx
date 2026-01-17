import React, { useState } from 'react'

const App = () => {
 const [a, seta] = useState(0)
 function changenum(){
  seta(prev=>prev+1)
  seta(prev=>prev+1)
  seta(prev=>prev+1)
 
 }
  return (
    <div>
      <h1>value of number is {a}</h1>
      <button onClick={changenum}>clike</button>
    </div>
  )
}

export default App
