
import { useState } from 'react';
import './App.css'

function App(){
let [counter, setCounter] = useState(0);
let [zero, setZero] = useState("0")

function increaseValue(){
  if(counter >= 0 && counter < 20){
    counter += 1;
    setCounter(counter)
  }
  if(counter >= 10){
    setZero("")
  }
}

function decreaseValue(){
  if(counter > 0 && counter <= 20){
    counter -= 1;
    setCounter(counter)
  }
  if(counter < 10){
    setZero("0")
  }
}

  return (
    
    <div>

    <h1>IB Coding School</h1>
    <h2>Counter App 1 to 20</h2>
    <h3>Current Value: {zero}{counter} </h3>
    <div id='btn'>

    <button onClick={increaseValue} >Increase Value</button>
    <button onClick={decreaseValue} >Decrease Value</button>
    </div>
    </div>
    
  )

}

export default App;

// import React, { useEffect } from 'react';

// function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setSeconds(seconds => seconds + 1);
//     }, 500);

//     return () => clearInterval(interval);
//   }, []); // empty dependency array means it only runs once

//   return(
//     <>
//     <h1>Seconds: {seconds} </h1>
//     </>
//   )
// }

// export default Timer;




