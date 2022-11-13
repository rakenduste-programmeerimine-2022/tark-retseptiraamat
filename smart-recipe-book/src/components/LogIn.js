import React from "react";
import { Grid, Paper, Typography, Button, TextField } from "@mui/material";

function LogIn() {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "100px auto",
    };
    

    return (
        <>
            <Paper sx={{height: "10px"}} elevation={20} style={paperStyle}>
                <Grid align="center">
                    <Typography sx={{color: "#5e89b4b7", paddingBottom: "20px"}} variant="h5">Log in</Typography>

                    <TextField sx={{paddingBottom: "15px"}} label="Email" placeholder="Enter your email address" fullWidth required />
                    <TextField label="Password" placeholder="Enter your password" fullWidth required />

                    <Button sx={{marginTop: "5px", color: "#5e89b4b7"}}>Don't have an account?</Button>
                    <Button sx={{marginTop: "15px", backgroundColor: "#5e89b4b7"}} variant="contained" onSubmit={handleLogin}>Log in</Button>
                </Grid>
            </Paper>
        </>
    );
}

export default LogIn;