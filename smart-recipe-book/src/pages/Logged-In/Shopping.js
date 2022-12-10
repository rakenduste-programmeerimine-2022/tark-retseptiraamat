import React from "react";
import { Typography, Box } from "@mui/material";

import NavLoggedIn from "../../components/Logged-In/NavLoggedIn";
import AddSelectedRecipe from "../../components/Logged-In/AddSelectedRecipe";

function Shopping() {
    return (
        <>
            <NavLoggedIn />
            <Box sx={{display: "flex"}}>
                <Typography variant="h4" sx={{margin: "20px", paddingTop: "70px"}}>Selected recipes:</Typography>
                <Typography variant="h4" sx={{margin: "20px", paddingTop: "70px", paddingLeft: "20%"}}>Shopping list:</Typography>
            </Box>
            <AddSelectedRecipe />
        </>
    );
};

export default Shopping;

/*{recipes.map(recipe => (
    <AddSelectedRecipe 
        key={recipe._id}
        id={recipe._id}
        name={recipe.name}
        ingredients={recipe.ingredients}
    />
))}*/