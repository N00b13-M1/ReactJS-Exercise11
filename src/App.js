import React, { useState } from 'react'
import Increment from './Components/Increment'
import InputChange from './Components/InputChange'

export default function App() {

  const [nbr,setNbr] = useState({
    clicks: 0
  })

  const [val,setVal] = useState({
    text : "Basevalue"
  })
  
  // const incrementAgain = () =>{
  //   number.num += 1
  //   setNumber((prev) => { return {...prev, num: prev.num + 1}})
    
  // }
  return (
    <>
      <Increment  count={nbr.clicks} setCount={setNbr}/>
      <InputChange  original={val.text} new={setVal}/>
    </>
  )
}
