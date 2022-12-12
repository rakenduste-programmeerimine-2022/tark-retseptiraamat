const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeSchema = new Schema({
    userId: { type: String, required: true },
    recipeId: { type: String, required: true },
    
}, {
    timestamps: true,
});

const Like = mongoose.model('Like', likeSchema);

module.exports = Like;
