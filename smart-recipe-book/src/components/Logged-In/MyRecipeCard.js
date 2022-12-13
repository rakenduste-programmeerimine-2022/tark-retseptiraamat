import React from 'react';
import {Grid, Button} from '@mui/material';
import axios from 'axios';


import MakeMyCard from './MakeMyCard';

function MyRecipeCard() {

    const [recipes, setRecipes] = React.useState([]);
    const [searched, setSearched] = React.useState(false);
    React.useEffect(() => {
        axios.get('http://localhost:5000/like/user/' + sessionStorage.getItem('id'))
            .then(res => {
                getRecipes(res.data.map(recipe2 => recipe2.recipeId));
                
            }
            )
            .catch(err => console.log(err));
        
        });

    const getRecipes = (props) => {
        if (searched === false) {
        for(let i = 0; i < props.length; i++){
            axios.get('http://localhost:5000/recipe/' + props[i])
            .then(res => {
                setRecipes(recipes => [...recipes, res.data]);
            })
            .catch(err => console.log(err));
        }
        setSearched(true);
    }}
    

    return (
        <>
            
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

export default MyRecipeCard;