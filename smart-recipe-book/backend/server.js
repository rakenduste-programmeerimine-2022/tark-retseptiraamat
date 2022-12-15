const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true}
);

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const recipesRouter = require('./routes/recipe');
const usersRouter = require('./routes/users');
const likesRouter = require('./routes/like');
const shoppinglistRouter = require('./routes/shoppinglist');

app.use('/recipe', recipesRouter);
app.use('/users', usersRouter);
app.use('/like', likesRouter);
app.use('/shoppinglist', shoppinglistRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});