import React from 'react';
import {Grid, Typography} from '@mui/material';

function FullView(props) {
    return (
        <>

            <Grid item xs={12} gridTemplateColumns={2} container spacing={1} sx={{padding: "1%", marginTop: "80px"}}>
        
                <Grid item xs={5} sx={{paddingRight: "50px"}}>
                    <img style={{height: "auto", width: "100%"}} src={props.picture} />
                </Grid>

                <Grid item xs={7} sx={{paddingLeft: "3rem", width: "100%", overflowWrap: "break-word"}}>
                    <Typography sx={{fontSize: "2.5rem"}}>{props.name}</Typography>
                    <Typography sx={{fontSize: "1.3rem", paddingBottom: "10px"}}>{props.description}</Typography>
                </Grid>

                <Grid item xs={12} sx={{paddingLeft: "3rem", width: "100%", overflowWrap: "break-word"}}>
                    <Typography sx={{fontSize: "1.5rem", paddingBottom: "10px"}}>Ingredients</Typography>
                    <Typography sx={{fontSize: "1rem", paddingBottom: "10px"}}>{props.ingredients}</Typography>
                    <Typography sx={{fontSize: "1.5rem", paddingBottom: "10px"}}>Instructions</Typography>
                    <Typography sx={{fontSize: "1rem", paddingBottom: "10px"}}>{props.instructions}</Typography>
                </Grid>

            </Grid>
        </>
    );
}

export default FullView;