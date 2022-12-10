import react from "react";
import { Button, TextField, Box } from "@mui/material";
import axios from "axios";
import DefaultCard from "../DefaultCard";

import MakeMyCard from "./MakeMyCard";

function Filter() {
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
      axios.get("http://localhost:5000/recipe/")
        .then((res) => {
          const recipes = res.data;
          const newRecipes = [];
          recipes.forEach((recipe) => {
            let count = 0;
            recipe.ingredients.forEach((recipeIngredient) => {
              ingredients.forEach((ingredient) => {
                if (recipeIngredient.toLowerCase().includes(ingredient.toLowerCase())) {
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
              console.log(newRecipes);
              }
          });
          newRecipes.sort((a, b) => b.count - a.count);
          setRecipes(newRecipes);
          console.log("hello");
        })
        .catch((err) => console.log(err));
    }
  }, [search]);

  return (
    <div style={{ marginTop: "80px" }}>
      
      <Box>
        <Button sx={{color: "#0f5091ee"}} onClick={() => setSearchType("name")}>Search by name</Button>
        <Button sx={{color: "#0f5091ee"}} onClick={() => setSearchType("ingredient")}>search by ingredient</Button>
      </Box>
        {searchtype === "name" ? (
          <>
            <TextField type="text" placeholder="search by name" value={recipeName} size="small" onChange={(e) => setRecipeName(e.target.value)} />
            <Button sx={{"&:hover": {backgroundColor: "#5c84acb6"}, backgroundColor: "#6692be7c", color: "rgb(105, 105, 105)", padding: "5px", margin: "2px"}} size="small" variant="contained" onClick={searchRecipes}>Search</Button>
            
            {recipes.map((recipe) => {
              return <MakeMyCard
                key={recipe.recipe._id}
                name={recipe.recipe.name}
                ingredients={recipe.recipe.ingredients}
                instructions={recipe.recipe.instructions}
                picture={recipe.recipe.picture}
                id={recipe.recipe._id}
                description={recipe.recipe.description}

              />;
              
            })}
            
          </>
        ) : (
          <>
            <TextField sx={{float: "left", overflow: "auto"}} placeholder="search by ingredient" size="small" value={ingredient} onChange={(e) => setIngredient(e.target.value)} />
            <Button sx={{"&:hover": {backgroundColor: "#5c84acb6"}, padding: "5px", margin: "2px", backgroundColor: "#6692be7c", color: "rgb(105, 105, 105)", minWidth: "50px", float: "left"}} variant="contained" size="small" onClick={addIngredient}>Add</Button>

            <div style={{float: "left", clear: "left"}}>
            {ingredients.map((ingredient, index) => (
              <div key={index} style={{width: "fit-content", paddingLeft: "8px", margin: "8px", backgroundColor: "#6692be5e", color: "rgb(105, 105, 105)", borderRadius: "5px", float: "left"}}>
                {ingredient}
                <Button sx={{minWidth: "25px", color: "rgb(105, 105, 105)", padding: "0px"}} onClick={() => deleteIngredient(index)}>x</Button>
              </div>
            ))}
            </div>

            <Button sx={{"&:hover": {backgroundColor: "#5c84acb6"}, backgroundColor: "#6692be7c", color: "rgb(105, 105, 105)", padding: "5px", margin: "2px"}} size="small" variant="contained" onClick={searchRecipes}>Search</Button>
            {recipes.map((recipe) => {
              return <MakeMyCard
                key={recipe.recipe._id}
                name={recipe.recipe.name}
                ingredients={recipe.recipe.ingredients}
                instructions={recipe.recipe.instructions}
                picture={recipe.recipe.picture}
                id={recipe.recipe._id}
                description={recipe.recipe.description}

              />;
              
            })}
          </>
        )}
        {!search && (
          <div>
            <DefaultCard />
          </div>
        )}
    </div>
  );

};

export default Filter;
