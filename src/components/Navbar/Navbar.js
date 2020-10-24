import React from 'react';
import './Navbar.css'

export default function Navbar(props) {
  return (
      <div>
        <nav>
          <ul className = "Navbar">
            <li className = "navitem">
              <h4 onClick= {() => props.setCurrentPage(1)}>Home</h4>
            </li>
            <li className = "navitem">
              <h4 onClick= {() => props.setCurrentPage(2)} >Projects</h4>
            </li>
            <li className = "navitem">
              <h4 onClick= {() => props.setShowContact(true)} >Contact</h4>
            </li>
          </ul>
        </nav>
      </div>
  );
}