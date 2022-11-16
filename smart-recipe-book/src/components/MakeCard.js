import React from 'react';
import { Card, Button, Typography, CardMedia, Box} from '@mui/material';

import data from './data';

function MakeCard(props) {
    
    return (
        <>
        <div key={props.id}>
            <Card elevation={12} sx={{height: "auto", width: "20%", marginLeft: "5%", marginTop: "10%", padding: "1%"}}>
                <CardMedia sx={{height: "100%", width: "100%"}} component="img" image={data.image} alt="" />
            
                <Typography sx={{fontSize: "1.5rem", color: "grey"}}>{props.title}</Typography>
                <Typography sx={{paddingBottom: "10px", color: "grey"}}>{props.description}</Typography>
                
                <Box textAlign='center'>
                <Button sx={{color: "#5e89b4b7", justifyContent: "center", fontWeight: "bold"}} href={props.url}>View recipe</Button>
                </Box>
            </Card>
        </div>
        </>
    );
}

export default MakeCard;