import React, { useState } from "react";
import "./App.css";

function App() {
  const [top, setTop] = useState(100);
  const  [right, setRight] = useState(100);

  function moveUp() {
    setTop(top - 50);
  }

  function moveDown() {
    setTop(top + 50);
  }

  function moveRight(){
      setRight(right + 10)
  }

  function moveLeft(){
    setRight(right - 10)
}

  return (
    <div className="App">
      <h1>MOVE ME</h1>

      <p><button onClick={moveUp}>Move Up</button></p> 

      <p><button onClick={moveDown}>Move Down</button></p>

       <p><button onClick={moveRight}>Move Right</button></p>
       <p><button onClick={moveLeft}>Move Left</button></p>

      <div className="box" style={{transform:`translateY(${top}px)`}} />
      <div className="box1" style={{transform:`translateX(${right}px)`}} />
    </div>
  );
}

export default App;
