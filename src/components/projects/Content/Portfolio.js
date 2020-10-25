import React from 'react';
import './Content.css'

export default function Portfolio() {
  return (
    <div className = "container" id = "CurrentProject">
        <div className = "Image">
            <img className = "Imagecontent" src = "Portonew.png"></img>
        </div>
        <div className = "Text">
            <h3>Portfolio</h3>
            <p>
            My motivation for creating this portfolio was simply to have fun and become more proficient in technologoies such as ReactJS. I 
            created this on my free time and take great pleasure in designing and implementing new and cool features. I have worked with React several times 
            before but have mainly focused on the backend aspects of projects so far. So to be able to souly focus on the desgin aspects of things has been very
            fun and something i am very keen on doing more project like this in the future. My github and this project can be found by clicking the logo below.
            </p>
            <a href = "https://github.com/SimonDegen/Portfolio" target="_blank" right= "50%"><img src = "githubsmall.png" height= "50px" width ="50px"></img></a>            
        </div>
    </div>

    );
}