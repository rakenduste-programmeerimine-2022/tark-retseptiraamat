import React from 'react';
import {Grid} from '@mui/material';

import NavLoggedOut from '../components/NavLoggedOut';
import MakeCard from '../components/MakeCard';
import data from '../components/data.js';

function TheFeed() {
    return (
        <>
            <NavLoggedOut />
            
            <Grid sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, 350px)", justifyContent: "center", gridGap: "30px", paddingTop: "50px"}}>
            {data.map(data => (
                <MakeCard 
                    key={data.id}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                />
            ))}
            </Grid>
        </>
    );
}

export default TheFeed;