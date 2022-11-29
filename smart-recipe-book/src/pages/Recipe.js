import React from 'react';
import axios from 'axios';

import NavLoggedIn from '../components/NavLoggedIn';
import FullView from '../components/FullView';

function Recipe() {

    const [recipes, setRecipe] = React.useState({});

    React.useEffect(() => {
        axios.get('http://localhost:5000/recipe/:_id')
        .then(res => {
            setRecipe(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <NavLoggedIn />
            {recipes.map(recipe => (
                <FullView 
                    key={recipe._id}
                    image={recipe.picture}
                    title={recipe.name}
                    description={recipe.description}
                    ingredients={recipe.ingredients}
                    instructions={recipe.instructions}
                    username={recipe.username}
                />
            ))}
        </>
    );
}

export default Recipe;