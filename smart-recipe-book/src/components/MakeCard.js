import React from 'react';
import { Card, Button, Typography, CardMedia, Box, Grid} from '@mui/material';

function MakeCard(props) {
    
    return (
        <div key={props.id}>
            
            <Card elevation={12} sx={{height: "450px", width: "80%", marginLeft: "5%", marginTop: "10%", padding: "1%"}}>
                <CardMedia sx={{height: "50%", width: "100%"}} component="img" image={props.picture} />
            
                <Typography sx={{fontSize: "1.5rem", color: "grey"}}>{props.name}</Typography>
                <Typography sx={{paddingBottom: "10px", color: "grey"}}>{props.description}</Typography>
                
                <Box sx={{textAlign: "center"}}>
                <Button sx={{color: "#5e89b4b7", justifyContent: "center", fontWeight: "bold"}} >View recipe</Button>
                </Box>
            </Card>
        </div>
    );
}

export default MakeCard;