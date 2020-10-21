import React from 'react';
import './Projects.css'

function test(){
    const el = document.querySelector("#module");
    if(el){
      el.addEventListener("mousemove", (e) => {
      el.style.setProperty('--x', -e.offsetX/10 + "px");
      el.style.setProperty('--y', -e.offsetY/10 + "px");
    });
    }
  }
  function showdiv(value){
      console.log(value)
  }

class Projects extends React.Component {
    render() {
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
                        <div className = "testcomponent">
                            <div className = "Image"></div>
                            <div className = "Text">
                                <h3 color = "Blue">Avalon: The Resistance</h3>
                                <p>Avalon: The Resistance is a card role playing game for multiple players, which we have digitalized. Avalon is a game of social deduction in which 5-10 players work together to find the players that have been dealt the evil roles. To remove the need for a separate person called a 'game master', we have digitalized Avalon so that you and your friends can play using your smartphones and a TV.
                                My motivation for this project was that we used to play Avalon, but every round one player had to sit out and function as the 'game master'. In our version the application functions as the game master, resulting in a game experience where all players can partake.
                                When the time came to choose a tech stack for this project, I had just started working at Netpower. Therefore I decided that we should use the same stack as in Flydrone.no, so that this project could be used as a learning grounds for the project at work. This includes a C#/.NET Core backend with a React.js with Mobx frontend. The database uses Entity Framework Core for code-first migrations and this whole project is hosted, with full CI/CD, on Azure. Additionally, we used WebSockets for real-time connections, which has grown to become one of my favorite technologies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "NewImage">
                    <ul className = "Listen">
                        <li className = "Li-Item" onClick = {showdiv(1)} data-id = "1">Avalon</li>
                        <li className = "Li-Item" onClick = {showdiv(2)} data-id = "2">Bachelor</li>
                        <li className = "Li-Item" onClick = {showdiv(3)} data-id = "3">Portfolio</li>
                    </ul>
                </div>
          </div>
        );
    }
}
export default Projects;