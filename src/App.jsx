import { useState } from 'react' // import hooks
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(100)
  // let counter =15

  const addValue=()=>{
  //console.log("clicked",counter);
  //counter = counter + 1
  if(counter>=20){
    alert("Counter value is 20")
  }
  else{
  setCounter(counter+1)

 } }
 const removeValue=()=>{
  if(counter <= 0)
   {alert("counter value is 0")}
   else{
    {setCounter(counter-1)}
    }} 

  return (
    <>
    <h1>Chair aur react</h1>
    <h2>Counter value: {counter}</h2>

    <button
    onClick={addValue}
    >Add value {counter}</button>
    <br/>
    <button
    onClick={removeValue}>Subtract value {counter}</button>
    <p>footer:{counter}</p>
    </>
  )
}

export default App
