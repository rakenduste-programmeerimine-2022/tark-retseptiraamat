import react from 'react';
import Button from '@mui/material/Button';
// Filter search bar and search button
// filter uses backend getRecipeByIngredient function from recipeControllers.js
// adding engidients as tags with a add button and then clicking search will search for recipes with those ingredients

const Filter = () => {
    const [ingredient, setIngredient] = react.useState('');
    const [ingredients, setIngredients] = react.useState([]);
    const [recipes, setRecipes] = react.useState([]);
    const [search, setSearch] = react.useState(false);

    const addIngredient = () => {
        setIngredients([...ingredients, ingredient]);
        setIngredient('');
    }

    const searchRecipes = () => {
        setSearch(true);
    }

    const deleteIngredient = (index) => {
        const newIngredients = [...ingredients];
        newIngredients.splice(index, 1);
        setIngredients(newIngredients);
    }

    react.useEffect(() => {
        if (search) {
            fetch(`http://localhost:5000/recipe/ingredient/${ingredients}`)
                .then(res => res.json())
                .then(data => {
                    setRecipes(data);
                    setSearch(false);
                })
                .catch(err => console.log(err));
        }
    }, [search]);

    return (
        <div style={{marginTop:"8vh"}}>
            <div>
                <input type="text" value={ingredient} onChange={(e) => setIngredient(e.target.value)} />
                <Button variant="contained" onClick={addIngredient}>Add</Button>
            </div>
            <div>
                {ingredients.map((ingredient, index) => (
                    <div key={index}>
                        <p>{ingredient}</p>
                        <Button variant="contained" onClick={() => deleteIngredient(index)}>Delete</Button>
                    </div>
                ))}
            </div>
            <div>
                <Button variant="contained" onClick={searchRecipes}>Search</Button>
            </div>
            <div>
                {recipes.map((recipe, index) => (
                    <div key={index}>
                        <p>{recipe.name}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}




export default Filter;

