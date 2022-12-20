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
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Welcome Page
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/periodictable"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Periodic Table
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/quiz"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            Quizzes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/highscores"
            className={({ isActive }) => (isActive ? "active" : "inactive")}
          >
            High
            scores
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default NavBar;
