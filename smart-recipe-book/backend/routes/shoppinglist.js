const express = require('express');
const {
    getAllShoppingListItems,
    getShoppingListItemsByUserId,
    addToShoppingList,
    deleteFromShoppingList,
    deleteItemFromShoppinglist
} = require('../controllers/shoppinglistController');
const router = express.Router();

router.get('/', getAllShoppingListItems);
router.get('/user/:userId', getShoppingListItemsByUserId);
router.post('/add', addToShoppingList);
router.delete('/:id', deleteFromShoppingList);
router.delete('/user/:userId/recipe/:recipeId', deleteItemFromShoppinglist);

module.exports = router;