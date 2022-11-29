import React from "react";
import { Grid, Paper, Typography, Button, TextField } from "@mui/material";
import axios from "axios";


function Register() {
    const paperStyle = {
        position: "fixed",
        left: "40%",
        padding: "20px",
        height: "350px",
        width: "280px",
        margin: "100px auto",
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            username: e.target.username.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
            
        window.location = '/myfeed';
    };

    return (
        <>
            <Paper elevation={20} style={paperStyle} >
                <Grid sx={{height: "100vh"}} align="center">
                    <Typography sx={{color: "#5e89b4b7", paddingBottom: "20px"}} variant="h5">Register</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField sx={{paddingBottom: "15px"}} label="Email" name="email" placeholder="Enter your email address" fullWidth required />
                        <TextField sx={{paddingBottom: "15px"}} label="Username" name="username" placeholder="Enter username" fullWidth required />
                        <TextField label="Password" placeholder="Enter your password" name="password"fullWidth required />

                        <Button sx={{marginTop: "5px", color: "#5e89b4b7"}} >Already have an account?</Button>
                        <Button sx={{marginTop: "15px", backgroundColor: "#5e89b4b7"}} variant="contained" type="submit">Register</Button>
                    </form>
                </Grid>
            </Paper>
        </>
    );
}

export default Register;