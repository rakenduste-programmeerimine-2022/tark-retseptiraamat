import React from "react";

import { Button, AppBar, Toolbar, Typography, Stack, Box } from "@mui/material";

function NavLoggedIn() {

    const MyFeedClick = () => {
        window.location.href = "/myfeed";
    };
   
    const MyRecipesClick = () => {
        window.location.href = "/myrecipes";
    };

    return (
        <React.Fragment>
            <AppBar sx={{background: "#5e89b4b7"}}>
                <Toolbar>
                    <Typography sx={{fontSize: "1.5rem", marginRight: "50px"}}>Smart Recipe Book</Typography>
                    
                    <Box sx={{marginLeft: "50px", flexGrow: "1"}}>
                        <Button onClick={MyFeedClick} sx={{paddingRight: "30px", fontSize: "1rem", color: "white"}}>My Feed</Button>
                        <Button onClick={MyRecipesClick} sx={{fontSize: "1rem", color: "white"}}>My Recipes</Button>
                    </Box>
                    
                    <Stack sx={{direction: "row", spacing: "2"}}>
                        <Button sx={{fontSize: "1rem", color: "white"}}>Log out</Button>
                    </Stack>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

export default NavLoggedIn;