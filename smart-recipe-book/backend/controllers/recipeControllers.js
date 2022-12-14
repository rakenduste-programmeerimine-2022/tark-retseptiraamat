let recipe = require('../models/recipe.model');

//get all recipes
const getAllRecipes = async (req, res) => {
    recipe.find()
        .then(recipes => res.json(recipes))
        .catch(err => res.status(400).json('Error: ' + err));
};


//get recipe by id
const getRecipeByID = async (req, res) => {
    recipe.findById(req.params.id)
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
};
//get one recipe by ingredient
const getRecipeByIngredient = async (req, res) => {
    recipe.find({ingredients: req.params.ingredient})
        .then(recipe => res.json(recipe))
        .catch(err => res.status(400).json('Error: ' + err));
};

//add a recipe
const createRecipe = async (req, res) => {
    const name = req.body.name;
    const ingredients = req.body.ingredients;
    const instructions = req.body.instructions;
    const username = req.body.username;
    const description = req.body.description;
    const picture = req.body.picture;

    const newRecipe = new recipe({
        name,
        ingredients,
        instructions,
        username,
        description,
        picture,
    });

    newRecipe.save()
        .then(() => res.json('Recipe added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//delete a recipe
const deleteRecipeById = async (req, res) => {
    recipe.findByIdAndDelete(req.params.id)
        .then(() => res.json('Recipe deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
};

//update a recipe
const updateRecipeById = async (req, res) => {
    recipe.findById(req.params.id)
        .then(recipe => {
            recipe.name = req.body.name;
            recipe.ingredients = req.body.ingredients;
            recipe.instructions = req.body.instructions;
            recipe.username = req.body.username;

            recipe.save()
                .then(() => res.json('Recipe updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
};

//create shopping list based on selected recipes
const createShoppingList = async (req, res) => {
    let shoppingList = [];
    let recipeIds = req.body.recipeIds;
    for (let i = 0; i < recipeIds.length; i++) {
        let recipe = await getRecipeByID(recipeIds[i]);
        let ingredients = recipe.ingredients.split(',');
        for (let j = 0; j < ingredients.length; j++) {
            if (!shoppingList.includes(ingredients[j])) {
                shoppingList.push(ingredients[j]);
            }
        }
    }
    res.json(shoppingList);
};

//export the router
module.exports = {
    getAllRecipes,
    getRecipeByID,
    createRecipe,
    getRecipeByIngredient,
    deleteRecipeById,
    updateRecipeById
}
