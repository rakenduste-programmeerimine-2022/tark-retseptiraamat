import React from "react";
import "./styles/Nav.css";

import { Link, BrowserRouter } from "react-router-dom";
import Button from '@mui/material/Button';
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";

function NavLoggedIn() {

    return (

        <React.Fragment>
            <AppBar sx={{background: "#5e89b4b7"}}>
                <Toolbar>
                    <Typography sx={{fontSize: "1.5rem"}}>Smart Recipe Book</Typography>

                    <Tabs sx={{marginLeft: "50px"}} textColor="inherit">
                        <Tab label="My Feed" />
                        <Tab label="My Recipes" />
                    </Tabs>

                    <Button sx={{marginLeft: "auto", color: "white"}}>Log in</Button>
                    <Button sx={{marginLeft: "10px", color: "white"}}>Register</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>

        /*<nav>
            <h2 className="nav-title">Smart Recipe Book</h2>
            <BrowserRouter>
                <Link className="nav-links" to="/myfeed">MyFeed</Link>
                <Link className="nav-links" to="/myrecipes">MyRecipes</Link>
            </BrowserRouter>
            <Button>Log out</Button>
        </nav>*/
    );
}

export default NavLoggedIn;