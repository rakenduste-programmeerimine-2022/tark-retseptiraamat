import React from 'react';
import axios from 'axios';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';
import FullView from '../../components/FullView';

function MyRecipeFull() {

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
            <NavLoggedIn />
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

export default MyRecipeFull;