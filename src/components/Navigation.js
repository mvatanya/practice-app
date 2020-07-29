import React from 'react';
import {NavLink, Link } from "react-router-dom";
import "./Navigation.css"

const Navigation = () => {
  return ( 
    <nav className="Navigation navbar navbar-expand-md">
      <Link className="navbar-brand" to="/">
        สำนักพิมพ์ PBC
      </Link>
      <ul className="navbar navbar-nav ml-auto">
      <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/books-collections">
            หนังสือของเรา
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/lessons">
            บทเรียน
          </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/practices">
            แบบฝึกหัด
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation;