import React from 'react';
import { Card, Button, Typography, CardMedia, Box, Grid} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

function MakeMyCard(props) {
    const [liked, setLiked] = React.useState(false);
    
    const ViewMoreClick = () => {
        window.location.href = "/loggedinfullview/" + props.id;
    };
    React.useEffect(() => {
        axios.get('http://localhost:5000/like/user/' + sessionStorage.getItem('id'))
        .then((res) => {
            const likes = res.data;
            likes.forEach((like) => {
                if (like.recipeId === props.id) {
                    setLiked(true);
                }
                
            });
        })
        .catch((err) => console.log(err));
    }, []);
    const likeClick = () => {
        if (liked === false) {
            axios.post('http://localhost:5000/like/add', {
                userId: sessionStorage.getItem('id'),
                recipeId: props.id
            })
            .then((res) => {
                console.log(res.data);
                setLiked(true);
            })
            .catch((err) => console.log(err));
        } else {
            axios.delete("http://localhost:5000/like/user/" + sessionStorage.getItem('id') + "/recipe/"  + props.id)
            .then((res) => {
                console.log(res.data);
                setLiked(false);
            })
            .catch((err) => console.log(err));
        }
    };


    
    return (
        <div>
            <Card elevation={12} sx={{height: "450px", width: "80%", marginLeft: "5%", marginTop: "10%", padding: "1%"}}>
                <CardMedia sx={{height: "50%", width: "100%"}} component="img" image={props.picture} />
            
                <Typography sx={{fontSize: "1.5rem", color: "grey"}}>{props.name}</Typography>
                <Typography sx={{paddingBottom: "10px", color: "grey"}}>{props.description}</Typography>
                
                <Box sx={{textAlign: "center"}}>
                <Button onClick={ViewMoreClick} sx={{color: "#5e89b4b7", justifyContent: "center", fontWeight: "bold"}}>View recipe</Button>
                </Box>
                {liked === true ? 
                    <FavoriteIcon sx={{color: "red"}} onClick={likeClick} />
                  : <FavoriteBorderIcon sx={{color: "red"}} onClick={likeClick}  />}
            </Card>
        </div>
    );
}

export default MakeMyCard;