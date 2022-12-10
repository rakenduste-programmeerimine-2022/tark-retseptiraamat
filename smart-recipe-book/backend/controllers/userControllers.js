let User = require('../models/user.model');
const bcrypt = require('bcrypt');
const saltRounds = 10;
//get all users
const getAllUsers = async (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
}
//add a user and hash the password
const AddUser = async (req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new User({ username, email, password: hashedPassword });
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
//login user using email and password, usinf bcrypt to compare the password
const loginUser = async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    User.findOne({ email: email })
        .then(user => {
            if (user) {
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result == true) {
                        res.json({user: user, message: "success" });
                    } else {
                        res.json({ message: "Wrong username/password combination!" });
                    }
                });
            } else {
                res.json({ message: "User doesn't exist" });
            }
        })
        .catch(err => res.status(400).json('Error: ' + err));
};


module.exports = {
    getAllUsers,
    AddUser,
    deleteUserById,
    updateUserById,
    loginUser
}