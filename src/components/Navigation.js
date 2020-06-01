import React from 'react';
import {NavLink, Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return ( 
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        My Practice App
      </Link>
      <ul className="navbar navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/lessons">
            Lessons
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/practices">
            Practice
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;