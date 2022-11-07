import React from "react";
import "./styles/Nav.css";

import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";

//import { Link, BrowserRouter } from "react-router-dom";
import Button from '@mui/material/Button';
//import Box from '@mui/material/Box';
//import { color } from "@mui/system";

function NavLoggedOut() {
    const btnStyle = {
        color: "white",
        display: 'flex',
        justifyContent: 'flex-end'
        
    }

    return (

        <React.Fragment>
            <AppBar sx={{background: "#5e89b4b7"}}>
                <Toolbar>
                    <Typography sx={{fontSize: "1.5rem", marginRight: "50px"}}>Smart Recipe Book</Typography>

                    <Button sx={{marginRight: "10px", color: "white"}}>Log in</Button>
                    <Button sx={{color: "white"}}>Register</Button>
                </Toolbar>
            </AppBar>
        </React.Fragment>

        /*<nav>
            <Box style={btnStyle}>
            <h2 className="nav-title">Smart Recipe Book</h2>
            <Button style={{flexEnd: "flex-end",}}>Log in</Button>
            <Button style={btnStyle}>Register</Button>
            </Box>
        </nav>*/
    );
}

export default NavLoggedOut;