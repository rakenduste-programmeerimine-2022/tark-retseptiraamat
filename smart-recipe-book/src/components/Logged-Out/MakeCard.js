import React from 'react';
import { Card, Button, Typography, CardMedia, Box, Grid} from '@mui/material';

function MakeCard(props) {

    const ViewMoreClick = () => {
        window.location.href = "/loggedoutfullview/" + props.id;
    };

    return (
        <div>
            <Grid Grid sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, 350px)", gridGap: "30px", paddingTop: "50px", clear: "both"}}>
            <Card elevation={12} sx={{height: "450px", width: "80%", marginLeft: "5%", marginTop: "10%", padding: "1%"}}>
                <CardMedia sx={{height: "50%", width: "100%"}} component="img" image={props.picture} />
            
                <Typography sx={{fontSize: "1.5rem", color: "grey"}}>{props.name}</Typography>
                <Typography sx={{paddingBottom: "10px", color: "grey"}}>{props.description}</Typography>
                
                <Box sx={{textAlign: "center"}}> 
                <Button onClick={ViewMoreClick} sx={{color: "#5e89b4b7", justifyContent: "center", fontWeight: "bold"}}>View recipe</Button>
                </Box>
            </Card>
            </Grid>
        </div>
    );
}

export default MakeCard;