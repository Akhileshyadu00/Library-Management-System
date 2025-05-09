import React, { useState, useRef } from 'react'
import "./Demo.css"


function Demo() {

    let x = 0;

    const [y, setY] = useState(0)

    function handleUpdateCount() {
        x = x+1 
        console.log(x);  
    }

   function handleUpdateY() {
    setY(y+1)
    console.log(y+1);
    
   }

   const z = useRef(0)
   
  function handleZ() {
    z.current = z.current+1
    console.log(z.current);
  }
   

  return (
    <div>
      <h1>Demo</h1>
      <h1>{x}</h1>
      <button onClick={handleUpdateCount}>Increase X</button>
      <br />
      <h1>{y}</h1>
      <button onClick={handleUpdateY}>Increase Y</button>
      <br />
      <h1> Z: {z.current}</h1>
      <button onClick={handleZ}>Increase z</button>
    </div>
  )
}

export default Demo
