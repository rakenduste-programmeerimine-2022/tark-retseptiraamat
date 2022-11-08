import { Grid, Paper } from "@mui/material";
import React from "react";

function LogIn() {
    const paperStyle = {
        padding: 20,
        height: "70vh",
        width: 280,
        margin: "100px auto",
    }
    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>
                this is going to be the sigh in
            </Paper>
        </Grid>
    );
}

export default LogIn;