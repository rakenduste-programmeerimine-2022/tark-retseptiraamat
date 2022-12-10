import React from 'react';
import {Grid, Button, TextField} from '@mui/material';
import axios from 'axios';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';

function Upload() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipe = {
            name: e.target.name.value,
            ingredients: e.target.ingredients.value,
            instructions: e.target.instructions.value,
            description: e.target.description.value,
            picture: e.target.picture.value,
            username: localStorage.getItem("username")
        };

        axios.post('http://localhost:5000/recipe/add', recipe)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

            window.location.href = "/myfeed";
    };

    return (
        <>
            <NavLoggedIn />
            <Grid sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, 350px)", justifyContent: "center", paddingTop: "80px"}}>
                <label>Upload recipe</label>
                <form onSubmit={handleSubmit}>
                    <TextField label="Title" placeholder="Enter recipe title" name="name" required/>
                    <TextField multiline label="Description" placeholder="Enter recipe description" name="description" required/>
                    <TextField multiline label="Ingredients" placeholder="Enter recipe ingredients" name="ingredients" required/>
                    <TextField multiline label="Instructions" placeholder="Enter recipe instructions" name="instructions" required/>
                    <TextField label="Image Url" placeholder="Enter image url" name="picture" required/>
                    <Button type="submit">Upload</Button>
                </form>
            </Grid>
        </>
    );
}

export default Upload;

/*
<TextField label="kasutaja" placeholder="hai" name="username" required/>
const onInputChange = (event) => {
    console.log(event.target.value)
};

<form method='post' action='http://localhost:5000/upload'>
    <div>
        <label>Upload image</label>
        <input type="file" onChange={onInputChange} />

        <button type="submit">Upload</button>
    </div>
</form>
*/