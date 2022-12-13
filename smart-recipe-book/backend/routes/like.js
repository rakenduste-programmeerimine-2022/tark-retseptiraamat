const express = require('express');
const {
    getAllLikes,
    getLikesByRecipeId,
    getLikesByUserId,
    addLike,
    deleteLike,
    deleteLikeByUserIdAndRecipeId
} = require('../controllers/likeController');
const router = express.Router();

router.get('/', getAllLikes);
router.get('/recipe/:recipeId', getLikesByRecipeId);
router.get('/user/:userId', getLikesByUserId);
router.post('/add', addLike);
router.delete('/:id', deleteLike);
router.delete('/user/:userId/recipe/:recipeId', deleteLikeByUserIdAndRecipeId);

module.exports = router;