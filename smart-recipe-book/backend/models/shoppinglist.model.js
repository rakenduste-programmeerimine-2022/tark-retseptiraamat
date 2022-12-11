const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shoppinglistSchema = new Schema({
    userId: { type: String, required: true },
    recipeId: { type: String, required: true },
    
}, {
    timestamps: true,
});

const Shoppinglist = mongoose.model('Shoppinglist', shoppinglistSchema);

module.exports = Shoppinglist;
