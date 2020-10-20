import React from 'react';
import './Navbar.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Projects from '../Projects/Projects';
import Home from '../Home/Home'

export default function Navbar() {
  return (
    <Router>
      <div>
        <nav>
          <ul className = "Navbar">
            <li className = "navitem">
              <Link to="/">Home</Link>
            </li>
            <li className = "navitem">
              <Link to="/Projects">Projects</Link>
            </li>
            <li className = "navitem">
              <Link to="/Contact">Contact</Link>
            </li>
            <li className = "navitem">
              <Link to="/About">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/About">
            <Projects />
          </Route>
          <Route path="/Contact">
            <Projects />
          </Route>
          <Route path="/Projects">
            <Projects />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}