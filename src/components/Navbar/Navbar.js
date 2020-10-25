import React from 'react';
import './Navbar.css'

export default function Navbar(props) {
  return (
      <div>
        <nav>
          <ul className = "Navbar">
            <li className = "navitem">
              <a onClick= {() => props.setCurrentPage(1)}>Home</a>
            </li>
            <li className = "navitem">
              <a onClick= {() => props.setCurrentPage(2)}>Projects</a>
            </li>
            <li className = "navitem">
              <a onClick= {() => props.setShowContact(true)}>Contact</a>
            </li>
          </ul>
        </nav>
      </div>
  );
}