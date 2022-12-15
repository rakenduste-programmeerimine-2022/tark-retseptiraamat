import React from 'react';
import { Card, Button, Typography, CardMedia, Box} from '@mui/material';
import PropTypes from 'prop-types';
import axios from 'axios';

import ShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

function MakeMyCard(props) {

    const [incart, setInCart] = React.useState(false);
    const [liked, setLiked] = React.useState(false);

    const ViewMoreClick = () => {
        window.location.href = "/loggedinfullview/" + props.id;
    };

    React.useEffect(() => {
        axios.get("http://localhost:5000/shoppinglist/user/" + sessionStorage.getItem("id"))
        .then((response) => {
            const data = response.data;
            data.forEach((item) => {
                if (item.recipeId === props.id) {
                    setInCart(true);
                }
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }, [props.id]);

    const AddToCartClick = () => {
        if (incart === false) {
           
            axios.post("http://localhost:5000/shoppinglist/add", {
                recipeId: props.id,
                userId: sessionStorage.getItem("id"),
            })
            .then((response) => {
                setInCart(true);
            })
            .catch((error) => {
                console.log(error);
            });
        }
        else{
            axios.delete("http://localhost:5000/shoppinglist/user/" + sessionStorage.getItem("id") + "/recipe/" + props.id)
            .then((response) => {
                setInCart(false);
            })
            .catch((error) => {
                console.log(error);
            });
        }
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
    }, [props.id]);
    
    const likeClick = () => {
        if (liked === false) {
            axios.post('http://localhost:5000/like/add', {
                userId: sessionStorage.getItem('id'),
                recipeId: props.id
            })
            .then((res) => {
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
                
                <Box sx={{display: "flex", flexDirection: "row"}}>
                    <Button onClick={ViewMoreClick} sx={{color: "#5e89b4b7", fontWeight: "bold", position: "relative", left: "80px", bottom: "-80px"}}>View recipe</Button>
                    <Box sx={{position: "relative", left: "110px", bottom: "-90px"}}>
                    {incart === true ?
                        <CartIcon onClick={AddToCartClick}/>
                        : <ShoppingCartIcon onClick={AddToCartClick}/>
                    }

                    {liked === true ? 
                        <FavoriteIcon sx={{color: "red"}} onClick={likeClick} />
                        : <FavoriteBorderIcon sx={{color: "red"}} onClick={likeClick}  />}
                    </Box>
                </Box>

            </Card>
        </div>
    );
}

MakeMyCard.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default MakeMyCard;