import React from "react";
import { Link, Router, BrowserRouter } from "react-router-dom";

function Nav() {
    const navStyle = {
        color: 'black'
    };

    return (
        <nav>
            <BrowserRouter>

            <ul>
            <li>
                <Link style={navStyle} to="/myfeed">MyFeed</Link>
            </li>
            <li>
                <Link style={navStyle} to="/myrecipes">MyRecipes</Link>
            </li>
            </ul>

            </BrowserRouter>
        </nav>
    );
}

export default Nav;