const express = require('express');
const {
    getAllUsers,
    AddUser,
    deleteUserById,
    updateUserById,
    loginUser
} = require('../controllers/userControllers');
const router = express.Router();

router.get('/', getAllUsers);
router.post('/add', AddUser);
router.post('/delete/:id', deleteUserById);
router.post('/update/:id', updateUserById);
router.post('/login', loginUser);

module.exports = router;