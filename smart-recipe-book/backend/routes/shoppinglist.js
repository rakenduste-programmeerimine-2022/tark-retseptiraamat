const express = require('express');
const {
    getAllShoppingListItems,
    getShoppingListItemsByUserId,
    addToShoppingList,
    deleteFromShoppingList
} = require('../controllers/shoppinglistController');
const router = express.Router();

router.get('/', getAllShoppingListItems);
router.get('/user/:userId', getShoppingListItemsByUserId);
router.post('/add', addToShoppingList);
router.delete('/:id', deleteFromShoppingList);

module.exports = router;