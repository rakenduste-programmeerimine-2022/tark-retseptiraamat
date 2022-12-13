const express = require('express');
const {
    getAllRecipes,
    getRecipeByID,
    createRecipe,
    getRecipeByIngredient,
    deleteRecipeById,
    updateRecipeById,
} = require('../controllers/recipeControllers');
const router = express.Router();

router.get('/', getAllRecipes);
router.post('/add', createRecipe);
router.get('/:id', getRecipeByID);
router.get('/ingredient/:ingredient', getRecipeByIngredient);
router.delete('/:id', deleteRecipeById);
router.post('/update/:id', updateRecipeById);


module.exports = router;