import React from 'react';
import { Card, Button, Typography, CardMedia, Box} from '@mui/material';

import pizza from './pizza.jpg';


function MakeCard() {
    
    return (
        <>
            <Card elevation={12} sx={{height: "auto", width: "20%", marginLeft: "5%", marginTop: "10%", padding: "1%"}}>
                <CardMedia sx={{height: "100%", width: "100%"}} component="img" image={pizza} alt="" />
            
                <Typography sx={{fontSize: "1.5rem", color: "grey"}}>Recipe title</Typography>
                <Typography sx={{paddingBottom: "10px", color: "grey"}}>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.</Typography>
                
                <Box textAlign='center'>
                <Button sx={{color: "#5e89b4b7", justifyContent: "center", fontWeight: "bold"}} href="https://github.com/centre-for-educational-technology/evkk">View recipe</Button>
                </Box>
            </Card>
        </>
    );
}

export default MakeCard;