import React from 'react';
import {Grid, Button, Box} from '@mui/material';
import axios from 'axios';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';
import FilterLoggedIn from '../../components/Logged-In/FilterLoggedIn';


function MyRecipes() {

    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:5000/recipe/')
            .then(res => {
                setRecipes(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    
    const handleShopping = () => {
        window.location.href = "/shoppinglist";
    };

    const handleUpload = () => {
        window.location.href = "/uploadnew";
    };

    return (
        <>
            <NavLoggedIn />
            <Box sx={{paddingTop: "10px", marginRight: "10px", float: "right"}}>
            <Button sx={{marginRight: "30px", color: "#0f5091ee"}} onClick={handleShopping}>View shopping list</Button>
            <Button sx={{color: "#0f5091ee"}} onClick={handleUpload}>Upload new recipe</Button>
            </Box>
            <FilterLoggedIn />
        </>
    );
}

export default MyRecipes;