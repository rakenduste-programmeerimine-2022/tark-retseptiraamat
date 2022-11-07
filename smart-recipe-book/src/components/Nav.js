import React from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "./styles/Nav.css";
import Button from '@mui/material/Button';

function Nav() {

    return (
        <nav>
            <h2 className="nav-title">Smart Recipe Book</h2>
            <BrowserRouter>
                <Link className="nav-links" to="/myfeed">MyFeed</Link>
                <Link className="nav-links" to="/myrecipes">MyRecipes</Link>
            </BrowserRouter>
            <Button></Button>
        </nav>
    );
}

export default Nav;