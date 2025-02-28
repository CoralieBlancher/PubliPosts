import React from "react";
import { Link } from "react-router";
import "./style.css";

const Nav = () => {
    return (
        <nav className="nav-container">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/add-post">Ajouter un Post</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;