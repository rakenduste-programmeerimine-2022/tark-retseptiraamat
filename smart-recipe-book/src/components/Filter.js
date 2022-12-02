import react from "react";
import Button from "@mui/material/Button";
import axios from "axios";

const Filter = () => {
  const [ingredient, setIngredient] = react.useState("");
  const [ingredients, setIngredients] = react.useState([]);
  const [recipes, setRecipes] = react.useState([]);
  const [search, setSearch] = react.useState(false);
  const [searchtype, setSearchType] = react.useState("name");
  const [recipeName, setRecipeName] = react.useState("");

  const addIngredient = () => {
    if (ingredient !== "") {
      setIngredients([...ingredients, ingredient]);
      setIngredient("");
    }
  };

  const searchRecipes = () => {
    if (ingredients.length > 0 || recipeName !== "") {
      setSearch(true);
    }
  };

  const deleteIngredient = (index) => {
    const newIngredients = [...ingredients];
    newIngredients.splice(index, 1);
    setIngredients(newIngredients);
  };

  react.useEffect(() => {
    if (search && searchtype == "ingredient") {
      axios
        .get("http://localhost:5000/recipe/")
        .then((res) => {
          const recipes = res.data;
          const newRecipes = [];
          recipes.forEach((recipe) => {
            let count = 0;
            recipe.ingredients.forEach((recipeIngredient) => {
              ingredients.forEach((ingredient) => {
                if (
                  recipeIngredient
                    .toLowerCase()
                    .includes(ingredient.toLowerCase())
                ) {
                  count++;
                }
              });
            });
            if (count > 0) {
              newRecipes.push({ recipe: recipe, count: count });
            }
          });
          newRecipes.sort((a, b) => b.count - a.count);
          console.log(newRecipes);
          setRecipes(newRecipes);
        })
        .catch((err) => console.log(err));
    } else if (search && searchtype == "name") {
      axios.get("http://localhost:5000/recipe/")
        .then((res) => {
            const recipes = res.data;
            const newRecipes = [];
            recipes.forEach((recipe) => {
                if (recipeName.toLowerCase().includes(recipe.name.toLowerCase())) {
                newRecipes.push(recipe);
                }
            });
            setRecipes(newRecipes);
            }
        )
        .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <div style={{ marginTop: "8vh" }}>
      <div>
        <Button onClick={() => setSearchType("name")}>Search by name</Button>
        <Button onClick={() => setSearchType("ingredient")}>
          search by ingredient
        </Button>
        {searchtype === "name" ? (
          <>
            <input type="text" placeholder="search by name" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} />
            <Button variant="contained" onClick={searchRecipes}>
              Search
            </Button>

            {recipes.map((recipe) => (
                <div>
                    <h1>{recipe.name}</h1>
                    <p>{recipe.description}</p>
                </div>
            ))}

          </>
        ) : (
          <>
            <input
              type="text" placeholder="search by ingredient"
              value={ingredient}
              onChange={(e) => setIngredient(e.target.value)}
            />
            <Button variant="contained" onClick={addIngredient}>
              Add
            </Button>
            <div>
              {ingredients.map((ingredient, index) => (
                <div key={index}>
                  <p>{ingredient}</p>
                  <Button
                    variant="contained"
                    onClick={() => deleteIngredient(index)}
                  >
                    Delete
                  </Button>
                </div>
              ))}
            </div>
            <div>
              <Button variant="contained" onClick={searchRecipes}>
                Search
              </Button>
            </div>
            <div>
              {recipes.map((recipe, index) => (
                <div key={index}>
                  <p>{recipe.recipe.name}</p>
                  <p>{recipe.recipe.description}</p>
                  <p>{recipe.recipe.ingredients}</p>
                  <p>{recipe.recipe.instructions}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Filter;
