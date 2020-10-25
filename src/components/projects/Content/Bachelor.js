import React from 'react';
import './Content.css'

export default function Bachelor() {
  return (
    <div className = "container" id = "CurrentProject">
        <div className = "Image">
            <img className = "Imagecontent" src = "BasicLayout.png"></img>
        </div>
        <div className = "Text">
            <h3>Bacheloren</h3>
            <p>Booking and attending meetings is an essential part of everyday life for many people. 
                Organizing a meeting in a way so that it fits everyone's schedule can be a difficult process and can take up valuable time for 
                the people involved. That is exactly why we wanted to make this our project. The goal for this project is to simplify this
                 process by the use of a platform which uses the Microsoft Graph API and focuses on user simplicity. Booking a meeting should be 
                 an easy task from beginning to end. There are already different applications made for tackling this task, but quite a few of these 
                 require work from the user which we consider to be unnecessary. The motivation behind this project is as mentioned to make the 
                 process of arrangingmeetings easier for the people planning and attending. Aside from that, our personalmotivation is directed 
                 towards learning new technology and new languages, such as C#,.NET CORE, and React, which we have never used before. We created this
                 project using Azure DevOps. I would like to thank Veni for their help and guidance in creating this project. This project was created in
                 collabotarion with Johanna Kinstad. For more information about my bachelor please dont hesitate to send me a email or contact me on LinkedIn 
                 which can be found on the contact page.
                 </p>
        </div>
    </div>
    );
}