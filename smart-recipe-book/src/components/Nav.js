import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./styles/Nav.css";

function Nav() {
    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
            <BrowserRouter>
            <ul className="nav-links">
                <Link style={navStyle} to="/myfeed">MyFeed</Link>
                <Link style={navStyle} to="/myrecipes">MyRecipes</Link>
            </ul>
            </BrowserRouter>
        </nav>
    );
}

export default Nav;