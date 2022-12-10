import React from 'react';
import {Grid, Button} from '@mui/material';
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
            <br /><br /><br /><br />
            <Button variant="contained" onClick={handleShopping}>View shopping list</Button>
            <Button variant="contained" onClick={handleUpload}>Upload new recipe</Button>
            <Grid sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, 350px)", justifyContent: "center", gridGap: "30px", paddingTop: "50px"}}>
                <FilterLoggedIn />
            </Grid>
        </>
    );
}

export default MyRecipes;