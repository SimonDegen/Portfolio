import React from 'react';
import Typical from 'react-typical'
import './Home.css'
import ReactTypingEffect from 'react-typing-effect';


function test(){
    const el = document.querySelector("#module");
    if(el){
      el.addEventListener("mousemove", (e) => {
      el.style.setProperty('--x', -400-e.offsetX/15 + "px");
      el.style.setProperty('--y', -150-e.offsetY/15 + "px");
    });
    }
  }

class Home extends React.Component {
    render() {
      return (
        <div className="App-header">
            <div className="l">
                <div id = "module" className = "background" onMouseMove = {test}>
                </div >
                <ReactTypingEffect 
                  text={["Welcome to my Portfolio!", "Have a look around!"]}
                  cursorRenderer={cursor => <h1>{cursor}</h1>}
                  speed = {150}
                  eraseSpeed = {150}
                  typingDelay = {1000}
                  displayTextRenderer={(text, i) => {
                    return (
                      <h1>
                        {text}
                      </h1>
                    );
                  }}        
                />
            </div>
            <div className = "Body">
                <div>
                    <img className = "Me" src = "smile.jpg" width = "250px" height = "375px"></img>
                    <p id = "frontpagecontent">
                    Hello, my name is Simon Degen and im 21 years old. I have a bachelores degree as a 
                    Computer engineer, and am currently studying industrial economics in Stavanger.
                    </p>
                </div>
            </div>

      </div>
    );
  }
}
export default Home;