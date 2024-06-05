import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setcounter] = useState(15)

  // let counter = 15;

  const addValue = ()=>{
    // counter = counter + 1;
    if(counter<20){
      setcounter(counter+1)
      console.log("Value Added", counter);
    }
    else{
      setcounter(20);
    }
  }

  const removeValue = ()=>{
    if(counter>0){
      setcounter(counter-1);
    }
    else{
      setcounter(0);
    }
  }

  return (
    <>
      <h1>Hey</h1>
      <h2>Counter Value: {counter}</h2>
      <button
      onClick={addValue}>Add value</button>
      <br />
      <br />
      <button
      onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
