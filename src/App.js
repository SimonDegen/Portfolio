import React from 'react';
import './App.css';
import Typical from 'react-typical'


function test(){
  const el = document.querySelector("#module");
  if(el){
    el.addEventListener("mousemove", (e) => {
    el.style.setProperty('--x', -e.offsetX/10 + "px");
    el.style.setProperty('--y', -e.offsetY/10 + "px");
  });
  }
}
function App() {
  return (
    <div className="App">
      <ul className = "Navbar">
        <li className = "navitem"><a href="default.asp">Home</a></li>
        <li className = "navitem"><a href="news.asp">Projects</a></li>
        <li className = "navitem"><a href="contact.asp">Contact</a></li>
        <li className = "navitem"><a href="about.asp">About</a></li>
      </ul>
      <div className="App-header">
        <div className="l">
          <div id = "module" className = "background" onMouseMove = {test}>
          </div>
          <Typical
            steps={['Welcome to my portfolio!', 2500, 'My name is Simon Degen', 2500]}
            loop={Infinity}
            wrapper="h1"
            className = "magic"
          />
        </div>
        <div className = "Body">
          <div>
            <img className = "Me" src = "Me.jpg" width = "250px" height = "375px"></img>
            <p id = "frontpagecontent">
              Hello, my name is Simon Degen and im 21 years old. I am currently studying industriell economics. I have a bachelores degree as a 
              Computer engineer. A fun fact about me is that i have lived in 4 countries and therefor i know 4 languages fluently. English, Norwegian, German and Danish
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
