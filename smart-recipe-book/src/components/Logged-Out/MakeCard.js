import React from 'react';
import { Card, Button, Typography, CardMedia, Box, Grid} from '@mui/material';
import PropTypes from 'prop-types';

function MakeCard(props) {

    const ViewMoreClick = () => {
        window.location.href = "/loggedoutfullview/" + props.id;
    };

    return (
        <div>
            <Card elevation={12} sx={{height: "450px", width: "80%", marginLeft: "5%", marginTop: "10%", padding: "1%"}}>
                <CardMedia sx={{height: "50%", width: "100%"}} component="img" image={props.picture} data-testid="card-media"/>
            
                <Typography sx={{fontSize: "1.5rem", color: "grey"}} data-testid="card-title">{props.name}</Typography>
                <Typography sx={{paddingBottom: "10px", color: "grey"}} data-testid="card-description">{props.description}</Typography>
                
                <Box sx={{textAlign: "center"}}> 
                <Button onClick={ViewMoreClick} sx={{color: "#5e89b4b7", justifyContent: "center", fontWeight: "bold", position: "relative", bottom: "-80px"}} data-testid="card-button">View recipe</Button>
                </Box>
            </Card>
        </div>
    );
}

MakeCard.propTypes = {
    picture: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default MakeCard;