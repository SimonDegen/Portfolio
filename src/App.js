import React from 'react';
import './App.css';
import Typical from 'react-typical'

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="l">
          <Typical
            steps={['Welcome to my portfolio!', 2500, 'My name is Simon Degen', 2500]}
            loop={Infinity}
            wrapper="h1"
          />
        </div>
        <div className = "Body">
          <img className = "Me" src = "Me.jpg" width = "400px" height = "600px"></img>
        </div>
      </div>
      <div className = "banner">
      </div>
      <div className = "Nextpage">
        <p className = "Stickyguys">So, who am i ?</p>
        <button> Reveal </button>
      </div>
    </div>
  );
}
export default App;
