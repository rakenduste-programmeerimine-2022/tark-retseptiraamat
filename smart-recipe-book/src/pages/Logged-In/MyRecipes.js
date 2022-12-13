import React from 'react';
import { Button, Box } from '@mui/material';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';
import MyRecipeCard from '../../components/Logged-In/MyRecipeCard';


function MyRecipes() {

    

    const handleShopping = () => {
        window.location.href = "/shoppinglist";
    };

    const handleUpload = () => {
        window.location.href = "/uploadnew";
    };

    return (
        <>
            <NavLoggedIn />
            <Box sx={{paddingTop: "80px", marginRight: "10px"}}>
                <Button sx={{marginRight: "30px", color: "#0f5091ee"}} onClick={handleShopping}>View shopping list</Button>
                <Button sx={{color: "#0f5091ee"}} onClick={handleUpload}>Upload new recipe</Button>
            </Box>
            <MyRecipeCard />
        </>
    );
}

export default MyRecipes;