import React from 'react';
import './Contact.css'


export default function Contact(props) {
    function RemoveContact(){
        var cardEl = document.getElementById("CardId")
        cardEl.classList.add("Slideout")
        var bk = document.getElementById("Bk")
        bk.classList.add("Fadeout")
        setTimeout(function(){ 
            props.setShowContact(false); 
        }, 2000);
    }
    return (
        <div className = "MainContainer">
            <div id = "Bk" className ="Greybackground" onClick= {() => RemoveContact()}></div>
            <div id = "CardId" className = "Card">
                <div className = "Top">
                    <img className = "Close" src ="close.png" onClick= {() => RemoveContact()}></img>
                    <div className = "contentbox">
                        <h3>Hello there!</h3>
                        <h5>+47 482 63 325</h5>
                        <h5>Simondegen99@gmail.com</h5>
                    </div>
                </div>
                <div className = "Bottom">
                    <a  href = "https://www.linkedin.com/in/simon-degen-02b383192/" target="_blank"  > 
                        <img src ="Linkedin.png" width="200px" height = "100px"></img>
                    </a>
                    <a  href = "https://github.com/SimonDegen" target="_blank"  > 
                        <img src ="Github.png" width="200px" height = "100px"></img>
                    </a>
                    <a  href = "mailto: simondegen99@gmail.com" target="_blank"  > 
                        <img src ="Outlook.png" width="200px" height = "80px"></img>
                    </a>
                   
                </div>
            </div>
            
        </div>
    );
  }