import React from "react";
import { Grid, Paper, Typography, Button, TextField } from "@mui/material";
import axios from "axios";


function LogIn() {
    const paperStyle = {
        position: "fixed",
        left: "40%",
        padding: "20px",
        height: "280px",
        width: "280px",
        margin: "100px auto",
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            email: e.target.email.value,
            password: e.target.password.value
        };

        axios.post('http://localhost:5000/users/login', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

            window.location.href = "/myfeed";
    };
    return (
        <>
            <Paper elevation={20} style={paperStyle}>
                <Grid align="center" >
                    <Typography sx={{color: "#5e89b4b7", paddingBottom: "20px"}} variant="h5">Log in</Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField sx={{paddingBottom: "15px"}} label="Email" placeholder="Enter your email address" name="email" fullWidth required />
                        <TextField label="Password" placeholder="Enter your password" type="password" name="password" fullWidth required />

                        <Button sx={{marginTop: "15px", backgroundColor: "#5e89b4b7"}} variant="contained" type="submit">Log in</Button>
                    </form>
                </Grid>
            </Paper>
        </>
    );
}

export default LogIn;