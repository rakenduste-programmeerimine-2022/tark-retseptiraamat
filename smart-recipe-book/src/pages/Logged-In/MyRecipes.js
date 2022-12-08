import React from 'react';
import {Grid, Button} from '@mui/material';
import axios from 'axios';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';
import MakeMyCard from '../../components/Logged-In/MakeMyCard';

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
                {recipes.map(recipe => (
                    <MakeMyCard 
                        key={recipe._id}
                        id={recipe._id}
                        name={recipe.name}
                        instructions={recipe.instructions}
                        ingredients={recipe.ingredients}
                        description={recipe.description}
                        username={recipe.username}
                        picture={recipe.picture}
                    />
                ))}
            </Grid>
        </>
    );
}

export default MyRecipes;