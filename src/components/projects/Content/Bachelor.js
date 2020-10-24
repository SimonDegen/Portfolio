import React from 'react';
import './Content.css'

export default function Bachelor() {
  return (
    <div className = "container">
        <div className = "Image"></div>
        <div className = "Text">
            <h3>Bacheloren</h3>
            <p>Avalon: The Resistance is a card role playing game for multiple players, which we have digitalized. Avalon is a game of social deduction in which 5-10 players work together to find the players that have been dealt the evil roles. To remove the need for a separate person called a 'game master', we have digitalized Avalon so that you and your friends can play using your smartphones and a TV.
            My motivation for this project was that we used to play Avalon, but every round one player had to sit out and function as the 'game master'. In our version the application functions as the game master, resulting in a game experience where all players can partake.
            When the time came to choose a tech stack for this project, I had just started working at Netpower. Therefore I decided that we should use the same stack as in Flydrone.no, so that this project could be used as a learning grounds for the project at work. This includes a C#/.NET Core backend with a React.js with Mobx frontend. The database uses Entity Framework Core for code-first migrations and this whole project is hosted, with full CI/CD, on Azure. Additionally, we used WebSockets for real-time connections, which has grown to become one of my favorite technologies.
            </p>
        </div>
    </div>

    );
}