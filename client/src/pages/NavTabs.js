import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";

const NavTabs = () => (
   
<ul className="nav nav-tabs nav-elements">
    <li className="nav-item">
      <Link
        to="/"
        className={
          window.location.pathname === "/" ? "nav-link active" : "nav-link"
        }
      >
        Home
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/strategy"
        className={
          window.location.pathname === "/strategy" ? "nav-link active" : "nav-link"
        }
      >
        Strategy
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/properties"
        className={
          window.location.pathname === "/properties" ? "nav-link active" : "nav-link"
        }
      >
        Properties
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/team"
        className={
          window.location.pathname === "/team" ? "nav-link active" : "nav-link"
        }
      >
        Team
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/contact"
        className={
          window.location.pathname === "/contact" ? "nav-link active" : "nav-link"
        }
      >
        Contact
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/signin"
        className={
          window.location.pathname === "/signin" ? "nav-link active" : "nav-link"
        }
      >
        Sign In
      </Link>
    </li>

    <li className="nav-item">
      <Link
        to="/admin"
        className={
          window.location.pathname === "/admin" ? "nav-link active" : "nav-link"
        }
      >
        Admin
      </Link>
    </li>


  </ul>
);

export default NavTabs;