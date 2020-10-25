import React from 'react';
import './Content.css'

export default function Avalon() {
  return (
    <div className = "container" id = "CurrentProject">
        <div className = "Image">
            <img className = "Imagecontent" src = "https://s0rensen.no/images/avalon.png"></img>
        </div>
        <div className = "Text">
            <h3>Avalon: The Resistance</h3>
            <p>Avalon: The Resistance is a card role playing game for multiple players, which we have digitalized. Avalon is a game of social deduction in which 5-10 players work 
                together to find the players that have been dealt the evil roles. To remove the need for a separate person called a 'game master', we have digitalized Avalon so that 
                you and your friends can play using your smartphones and a TV.
                My motivation for this project was that we used to play Avalon, but every round one player had to sit out and function as the 'game master'. 
            In our version the application functions as the game master, resulting in a game experience where all players can partake.
            We started on project the summer after i finished my bachelor, which we had coded in C#/.NET Core backend with a React.js frontend. So when the time came to choose a tech stack
            for this project, we choose C#/.Net Core and react as a frontend since i wanted to dive deeper and get a greater understanding in the mentioned techs. We use Entity Framework Core 
            for code-first migrations and this whole project is hosted, with full CI/CD, on Azure. We also decided to use WebSockets for real-time connections between players. I created this project with 
            a good friend of mine Marius Sørensen. The project can be found on his github.
            </p>
            <a href = "https://github.com/sorensenmarius" target="_blank" right= "50%"><img src = "githubsmall.png" height= "50px" width ="50px"></img></a>            
          
        </div>
    </div>

    );
}