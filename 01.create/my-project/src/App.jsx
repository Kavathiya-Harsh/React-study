import React from 'react'
import { useState } from 'react';

const App = () => {
  const [count , setcount]=useState(0);
  function increase(){
    setcount(count +1);
  }
  function decrease(){
    setcount(count -1);
  };
 
  const button={
      backgroundColor:"blue",
      padding:"15px",
  }

  function setColor(){
    if (count <=5) return "green";
    if (count <10) return "red"; 
    return "blue";
  }
  return (

    <div>
      <h2 style={{color:setColor()}}>{count}</h2>
      <button style={button} onClick={increase}>increase</button>
      <button style={button} disabled={count === 0} onClick={decrease}>Decrease</button>

    </div>
  )
}

export default App
