import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState("Welcome!");

  const handleShowInfoClick = () => {
    setMessage("6301077 Krittin Rungwachirakul");
  };

  const handleBackClick = () => {
    setMessage("Welcome!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>{message}</h1>
        {message === "Welcome!" && 
          <button onClick={handleShowInfoClick}>Show Info</button>
        }
        {message !== "Welcome!" && 
          <button onClick={handleBackClick}>Back to Home</button>
        }
      </header>
    </div>
  );
}

export default App;
