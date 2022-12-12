import React from "react";
import { Typography, Checkbox } from "@mui/material";

function AddSelectedRecipe(props) {
    return (
        <>
            <Checkbox {...props.title} defaultChecked />
        </>
    );
};

export default AddSelectedRecipe;