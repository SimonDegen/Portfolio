import React from 'react';
import './Navbar.css'
class Navbar extends React.Component {
    render() {
      return (
        <ul className = "Navbar">
          <li className = "navitem"><a href="news.asp">Home</a></li>
          <li className = "navitem"><a href="news.asp">Projects</a></li>
          <li className = "navitem"><a href="contact.asp">Contact</a></li>
          <li className = "navitem"><a href="about.asp">About</a></li>
        </ul>
    );
  }
}
export default Navbar;