import { React, useState } from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import LogIn from "./LogIn";
import Register from "./Register";

function NavLoggedOut() {

    const [login, loginIsShown] = useState(false);
    const LoginClick = () => {
        loginIsShown(!login);
        registerIsShown(false);
    };

    const [register, registerIsShown] = useState(false);
    const RegisterClick = () => {
        registerIsShown(!register);
        loginIsShown(false);
    }

    return (
        <>
        <AppBar sx={{background: "#5e89b4b7"}}>
            <Toolbar>
                <Typography sx={{fontSize: "1.5rem", marginRight: "50px"}}>Smart Recipe Book</Typography>

                <Button sx={{marginLeft: "50px", paddingRight: "30px", fontSize: "1rem", color: "white"}} onClick={LoginClick}>Log in</Button>
                <Button sx={{fontSize: "1rem", color: "white"}} onClick={RegisterClick}>Register</Button>
            </Toolbar>
        </AppBar>
        {login && <LogIn />}
        {register && <Register />}
        </>
    );
}

export default NavLoggedOut;