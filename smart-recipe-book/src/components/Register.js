import React from "react";
import { Grid, Paper, Typography, Button, TextField } from "@mui/material";

function Register() {
    const paperStyle = {
        padding: "20px",
        height: "350px",
        width: "280px",
        margin: "100px auto",
    };

    return (
        <>
            <Paper elevation={20} style={paperStyle}>
                <Grid sx={{height: "100vh"}} align="center">
                    <Typography sx={{color: "#5e89b4b7", paddingBottom: "20px"}} variant="h5">Register</Typography>

                    <TextField sx={{paddingBottom: "15px"}} label="Email" placeholder="Enter your email address" fullWidth required />
                    <TextField sx={{paddingBottom: "15px"}} label="Username" placeholder="Enter username" fullWidth required />
                    <TextField label="Password" placeholder="Enter your password" fullWidth required />

                    <Button sx={{marginTop: "5px", color: "#5e89b4b7"}}>Already have an account?</Button>
                    <Button sx={{marginTop: "15px", backgroundColor: "#5e89b4b7"}} variant="contained">Register</Button>
                </Grid>
            </Paper>
        </>
    );
}

export default Register;