import React from "react";
import { Typography, Box, Checkbox, Input, Button } from "@mui/material";
import axios from "axios";

import NavLoggedIn from "../../components/Logged-In/NavLoggedIn";
import AddSelectedRecipe from "../../components/Logged-In/AddSelectedRecipe";

function Shopping() {
    const [recipes, setRecipes] = React.useState([]);

    React.useEffect(() => {
        let recipe_ids = [];
        axios.get("http://localhost:5000/shoppinglist/user/" + sessionStorage.getItem("id"))
            .then((response) => response.data)
            .then((data) => {
                data.forEach((item) => {
                    recipe_ids.push(item.recipeId);
                });
            })
            .then(() => {
                recipe_ids.forEach((id) => {
                    axios.get("http://localhost:5000/recipe/" + id)
                        .then((response) => response.data)
                        .then((data) => {
                            setRecipes((oldArray) => [...oldArray, data]);
                        });
                });
            })
    }, []);

    const removeRecipe = (props) => {
        axios.delete("http://localhost:5000/shoppinglist/user/" + sessionStorage.getItem("id") + "/recipe/" + props)
            .then((response) => {
                window.location.reload();
                console.log(props);

            })
            .catch((error) => {
                console.log(error);
            });
    }


    return (
        <>
            <NavLoggedIn />
            <Box sx={{display: "flex"}}>
                <Typography variant="h4" sx={{margin: "20px", paddingTop: "70px", color: "grey"}}>Selected recipes:</Typography>
                <Typography variant="h4" sx={{margin: "20px", paddingTop: "70px", paddingLeft: "20%", color: "grey"}}>Shopping list:</Typography>
            </Box>
            
            <Box sx={{marginLeft: "3%", display: "flex"}}>
                <Box sx={{display: "flex", flexDirection: "column"}}>
                {recipes.map(recipe => (
                    <span 
                        key={recipe._id} 
                        id={recipe._id}
                    >
                    <Button id={recipe._id} onClick={() => removeRecipe(recipe._id)}>Remove</Button>
                    {recipe.name}     
                    </span>
                    
                ))}
                </Box>
                <Box sx={{marginLeft: "34%"}}>
                {recipes.map(recipe => (
                    <span key={recipe._id}>
                        {recipe.ingredients}
                        <br />
                    </span>
                ))}
                </Box>
            </Box>
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
))}
*/