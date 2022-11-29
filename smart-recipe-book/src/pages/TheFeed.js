import React from 'react';
import {Grid} from '@mui/material';

import NavLoggedOut from '../components/NavLoggedOut';
import MakeCard from '../components/MakeCard';
import axios from 'axios';

function TheFeed() {
    //returns cards for each recipe in throug a post request from the database
    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(() => {
        axios.get('http://localhost:5000/recipe/')
            .then(res => {
                setRecipes(res.data);
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <NavLoggedOut />
            
            <Grid sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, 350px)", justifyContent: "center", gridGap: "30px", paddingTop: "50px"}}>
                {recipes.map(recipe => (
                    
                <MakeCard 
                    key={recipe._id}
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

export default TheFeed;