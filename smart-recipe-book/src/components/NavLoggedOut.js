import { React, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import LogIn from "./LogIn";
import Register from "./Register";

function NavLoggedOut() {

    const [login, loginIsShown] = useState(false);
    const LoginClick = () => {
        loginIsShown(true);
    };

    const [register, registerIsShown] = useState(false);
    const RegisterClick = () => {
        registerIsShown(true);
    }

    return (
        <>
        <AppBar sx={{background: "#5e89b4b7"}}>
            <Toolbar>
                <Typography sx={{fontSize: "1.5rem", marginRight: "50px"}}>Smart Recipe Book</Typography>

                <Button sx={{marginRight: "10px", color: "white"}} onClick={LoginClick}>Log in</Button>
                <Button sx={{color: "white"}} onClick={RegisterClick}>Register</Button>
            </Toolbar>
        </AppBar>
        {login && <LogIn />}
        {register && <Register />}
        </>
    );
}

export default NavLoggedOut;