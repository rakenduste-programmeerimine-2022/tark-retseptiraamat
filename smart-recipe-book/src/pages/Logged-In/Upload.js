import React from 'react';
import {Grid, Card, Button, TextField, Typography} from '@mui/material';
import axios from 'axios';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';

function Upload() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const recipe = {
            name: e.target.name.value,
            ingredients: e.target.ingredients.value.split(", "),
            instructions: e.target.instructions.value,
            description: e.target.description.value,
            picture: e.target.picture.value,
            username: sessionStorage.getItem("username")
        };

        axios.post('http://localhost:5000/recipe/add', recipe)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

            window.location.href = "/myfeed";
    };

    return (
        <>
            <NavLoggedIn />
            <Card elevation={12} sx={{height: "auto", width: "20%", minWidth: "300px", position: "fixed", left: "35%", padding: "20px", marginTop: "100px"}}>
                <Grid align="center" >
                    <Typography variant="h4"  sx={{color: "#5e89b4b7"}}>Upload recipe</Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField sx={{marginTop: "10px", width: "90%"}} label="Title" placeholder="Enter recipe title" name="name" required/>
                        <TextField sx={{marginTop: "10px", width: "90%"}} multiline label="Description" placeholder="Enter recipe description" name="description" required/>
                        <TextField sx={{marginTop: "10px", width: "90%"}} multiline label="Ingredients" placeholder="Enter recipe ingredients" name="ingredients" required/>
                        <TextField sx={{marginTop: "10px", width: "90%"}} multiline label="Instructions" placeholder="Enter recipe instructions" name="instructions" required/>
                        <TextField sx={{marginTop: "10px", width: "90%"}} label="Image Url" placeholder="Enter image url" name="picture" required/>
                        <Button sx={{display: "flex", marginTop: "10px", color: "#5e89b4b7"}} type="submit">Upload</Button>
                    </form>
                </Grid>
            </Card>
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