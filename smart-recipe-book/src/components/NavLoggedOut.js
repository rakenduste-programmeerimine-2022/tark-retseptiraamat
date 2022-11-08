import React from "react";

import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import Button from '@mui/material/Button';

function NavLoggedOut() {
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
    );
}

export default NavLoggedOut;