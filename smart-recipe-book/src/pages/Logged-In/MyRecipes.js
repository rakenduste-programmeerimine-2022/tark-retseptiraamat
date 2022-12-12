import React from 'react';
import { Button} from '@mui/material';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';
import TestCard from '../../components/Logged-In/MyRecipeCard';


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
            <br /><br /><br /><br />
            <Button variant="contained" onClick={handleShopping}>View shopping list</Button>
            <Button variant="contained" onClick={handleUpload}>Upload new recipe</Button>
            <TestCard />
        </>
    );
}

export default MyRecipes;