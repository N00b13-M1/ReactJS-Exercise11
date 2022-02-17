import React, { useState } from 'react'

export default function App() {

  const [number,setNumber] = useState(0)
  
  let increment = () =>{
    setNumber(number+1);
    console.log("hello")
  }

  return (
    <>
      <div className="d-inline">
        <span>{number}</span>
      </div>
      <div>
        <button type="submit" onClick={() => increment()}>Increase</button>
      </div>
    </>
  )
}
