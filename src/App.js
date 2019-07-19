import React, { useState } from "react";
import "./App.css";

function App() {
  const [top, setTop] = useState(100);
  const [right, setRight] = useState(100);

  
  function moveUp() {
    setTop(top - 10);
  }

  function moveDown() {
    setTop(top + 10);
  }
 
  function moveRight() {
    setRight(right + 10);
  }

  function moveLeft() {
    setRight(right - 10);
  }

  return (
    <div className="App">
      <h1>MOVE ME</h1>

      <p>
        <button onClick={moveUp}>Up</button>
      </p>
      <p>
        <button onClick={moveDown}>Down</button>
      </p>

    
        <div className="box" style={{ transform: `translateY(${top}px) ` }} />
        <div className="box1" style={{ transform: `translateX(${right}px)` }} />
    
        
      <div class="btn-down">
        <p>
          <button onClick={moveRight}>Right</button>
        </p>
        <p>
          <button onClick={moveLeft}>Left</button>
        </p>
      </div>
    </div>
  );
}

export default App;
