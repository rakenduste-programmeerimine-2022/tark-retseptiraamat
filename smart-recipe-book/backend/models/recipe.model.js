const mongoose = require('mongoose');


const Schema = mongoose.Schema;
//also has images in the database using gridfs

const recipeSchema = new Schema({
    name: { type: String, required: true },
    //ingrediets is an array of objects with name and quantity
    ingredients: { type: Array, required: true },
    instructions: { type: String, required: true },
    username: { type: String, required: true },
    description: { type: String, required: true },
    picture: { type: String, required: false },
    
}, {
    timestamps: true,
});


const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
