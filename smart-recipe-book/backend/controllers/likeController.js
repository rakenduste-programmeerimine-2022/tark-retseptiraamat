let like = require('../models/like.model');

//get all likes
const getAllLikes = async (req, res) => {
    like.find()
        .then(likes => res.json(likes))
        .catch(err => res.status(400).json('Error: ' + err));
};

//get likes by recipe id
const getLikesByRecipeId = async (req, res) => {
    like.find({recipeId: req.params.recipeId})
        .then(likes => res.json(likes))
        .catch(err => res.status(400).json('Error: ' + err));
}

//get likes by user id
const getLikesByUserId = async (req, res) => {
    like.find({userId: req.params.userId})
        .then(likes => res.json(likes))
        .catch(err => res.status(400).json('Error: ' + err));
}

//add a like
const addLike = async (req, res) => {
    const userId = req.body.userId;
    const recipeId = req.body.recipeId;

    const newLike = new like({
        userId,
        recipeId,
    });

    newLike.save()
        .then(() => res.json('Like added!'))
        .catch(err => res.status(400).json('Error: ' + err));
}

//delete a like
const deleteLike = async (req, res) => {
    like.findByIdAndDelete(req.params.id)
        .then(() => res.json('Like deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}
//delete a like by user id and recipe id
const deleteLikeByUserIdAndRecipeId = async (req, res) => {
    like.findOneAndDelete({userId: req.params.userId, recipeId: req.params.recipeId})
        .then(() => res.json('Like deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
}


module.exports = {
    getAllLikes,
    getLikesByRecipeId,
    getLikesByUserId,
    addLike,
    deleteLike,
    deleteLikeByUserIdAndRecipeId
}