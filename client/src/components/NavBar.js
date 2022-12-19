import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
        <ul id="nav">
            <li>
            <Link to="/">Welcome Page</Link>
            </li>
            <li>
            <Link to="/periodictable">Periodic Table</Link>
            </li>
            <li>
            <Link to="/quiz">Quiz</Link>
            </li>
            <li><Link to="/highscores">Highscores</Link></li>
        </ul>
    );
}

export default NavBar;