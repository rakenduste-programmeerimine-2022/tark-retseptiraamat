import React from 'react';
import axios from 'axios';

import NavLoggedOut from '../../components/Logged-Out/NavLoggedOut';
import FullView from '../../components/FullView';

function RecipeFull() {

    const [recipes, setRecipe] = React.useState({});

    React.useEffect(() => {
        axios.get('http://localhost:5000/recipe/' + window.location.pathname.split('/')[2])
        .then(res => {
            setRecipe(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    }, []);

    return (
        <>
            <NavLoggedOut />
            <FullView
                key={recipes._id}
                name={recipes.name}
                instructions={recipes.instructions}
                ingredients={recipes.ingredients}
                description={recipes.description}
                username={recipes.username}
                picture={recipes.picture}
            />
           
        </>
    );
}

export default RecipeFull;