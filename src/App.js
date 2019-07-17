import React, {useState} from 'react';
import './App.css';

function App() {

  const [top, setTop] = useState(300);

  function move(){
    setTop ( top - 50 );
  }

  function moveDown(){
    setTop ( top + 50 );
  }
  
  return (
    <div className="App">
    <h1>Move UP/ Move Down</h1>

    </div>
  );
}

export default App;
