import React from 'react';
import {Grid} from '@mui/material';


import NavLoggedOut from '../../components/Logged-Out/NavLoggedOut';
import Filter from '../../components/Filter';

function TheFeed() {
    
    
    
    return (
        <>
            <NavLoggedOut />
            <Grid sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, 350px)", justifyContent: "center", gridGap: "30px", paddingTop: "50px"}}>
                <Filter />
            </Grid>
            
        </>
    );
}

export default TheFeed;