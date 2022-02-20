import React, { useState } from 'react'
import Increment from './Components/Increment'
import InputChange from './Components/InputChange'
import OnCopy from './Components/OnCopy'
import InputClick from './Components/InputClick'
import AlertButton from './Components/AlertButton'

export default function App() {

  const [nbr,setNbr] = useState({
    clicks: 0
  })

  const [value,setValue] = useState({
    text : "Basevalue"
  })
  
  // const incrementAgain = () =>{
  //   number.num += 1
  //   setNumber((prev) => { return {...prev, num: prev.num + 1}})
  // }
  return (
    <>
      <Increment  count={nbr.clicks} setCount={setNbr}/>
      <InputChange  original={value.text} new={setValue}/>
      <OnCopy/>
      <InputClick/>
      <AlertButton/>
    </>
  )
}
