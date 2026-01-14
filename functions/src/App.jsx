import React from 'react'

function btnclike() {
  console.log("cliked");
  
}
const App = () => {
  return (
    <div>
      <h1>helo woode</h1>
      <button onClick={btnclike}>click</button>
      
    </div>
  )
}

export default App

