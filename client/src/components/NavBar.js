import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul>
            <li>
                <Link to="/">Welcome Page</Link>
            </li>
        </ul>
    );
}

export default NavBar;