let User = require('../models/user.model');

//get all users
const getAllUsers = async (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
}
//add a user
const AddUser = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;


    const newUser = new User({
        username,
        email,
        password,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};
//delete a user
const deleteUserById = async (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
};
//update a user
const updateUserById = async (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;
            user.email = req.body.email;
            user.password = req.body.password;

            user.save()
                .then(() => res.json('User updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
};

module.exports = {
    getAllUsers,
    AddUser,
    deleteUserById,
    updateUserById,
}