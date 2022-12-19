import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <ul id="nav">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Welcome Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/periodictable"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Periodic Table
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Quiz
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/highscores"
            className={({ isActive }) => (isActive ? "active" : undefined)}
          >
            Highscores
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
