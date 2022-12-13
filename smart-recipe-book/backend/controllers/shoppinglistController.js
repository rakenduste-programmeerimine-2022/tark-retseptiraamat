let shoppinglist = require('../models/shoppinglist.model');

//get all ShoppingList items
const getAllShoppingListItems = async (req, res) => {
    shoppinglist.find()
        .then(ShoppingListItems => res.json(ShoppingListItems))
        .catch(err => res.status(400).json('Error: ' + err));
};

//get ShoppingList items by user id
const getShoppingListItemsByUserId = async (req, res) => {
    shoppinglist.find({userId: req.params.userId})
        .then(ShoppingListItems => res.json(ShoppingListItems))
        .catch(err => res.status(400).json('Error: ' + err));
}

//add a ShoppingList item
const addToShoppingList = async (req, res) => {
    const userId = req.body.userId;
    const recipeId = req.body.recipeId;

    const newShoppingListItem = new shoppinglist({
        userId,
        recipeId,
    });

    newShoppingListItem.save()
        .then(() => res.json('Added to shopping list!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//delete from ShoppingList
const deleteFromShoppingList = async (req, res) => {
    shoppinglist.findByIdAndDelete(req.params.id)
        .then(() => res.json('Deleted from shopping list.'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//delete by user id and recipe id
const deleteItemFromShoppinglist = async (req, res) => {
    shoppinglist.findOneAndDelete({userId: req.params.userId, recipeId: req.params.recipeId})
        .then(() => res.json('Deleted from shopping list.'))
        .catch(err => res.status(400).json('Error: ' + err));
}

module.exports = {
    getAllShoppingListItems,
    getShoppingListItemsByUserId,
    addToShoppingList,
    deleteFromShoppingList,
    deleteItemFromShoppinglist
}