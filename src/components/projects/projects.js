import React, { useState } from 'react';
import { Switch } from 'react-router-dom';
import './Projects.css'
import Avalon from './Content/Avalon'
import Bachelor from './Content/Bachelor'
import Portfolio from './Content/Portfolio'
import { wait } from '@testing-library/react';

function test(){
    const el = document.querySelector("#module");
    if(el){
      el.addEventListener("mousemove", (e) => {
      el.style.setProperty('--x', -e.offsetX/10 + "px");
      el.style.setProperty('--y', -e.offsetY/10 + "px");
    });
    }
  }


function Projects (){
    const [count,setcount] = useState(0);
    /* const [visible,toggle] = useState(Boolean)
    const fadeout = function(){
        setTimeout(() => {  
            var element = document.getElementById("pcontainer");
            console.log(element);
            element.className = "fadeout"
            }, 1000);
    } */
    return (
        <div className="ContentHolder" >
            <div className="left">
                <div id = "module" className = "background" onMouseMove = {test}>
                </div>

            </div>
            <div className = "right">
                <div className = "homecontent">
                    <img className = "Me" src = "Me.jpg" width = "250px" height = "375px"></img>
                    <p id = "frontpagecontent">
                    Hello, my name is Simon Degen and im 21 years old. I am currently studying industriell economics. I have a bachelores degree as a 
                    Computer engineer. A fun fact about me is that i have lived in 4 countries and therefor i know 4 languages fluently. English, Norwegian, German and Danish
                    </p>
                </div>
                <div className = "ProjectContainer">
                        {(() => {
                            switch (count) {
                            case 1:
                                return <Avalon/>
                            case 2:
                                return <Bachelor/>  
                            case 3:
                                return <Portfolio/>
                            default:
                                return <Avalon/>
                            }
                        })()}
                </div>
            </div>
            <div className = "NewImage">
                <ul className = "Listen">
                    <li className = "Li-Item" onClick= {() => setcount(1)} >Avalon</li>
                    <li className = "Li-Item" onClick= {() => setcount(2)} >Bachelor</li>
                    <li className = "Li-Item" onClick= {() => setcount(3)} >Portfolio</li>
                </ul>
            </div>
        </div>
    );
}
export default Projects;