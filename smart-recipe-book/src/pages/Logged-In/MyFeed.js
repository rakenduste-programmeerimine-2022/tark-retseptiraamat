import React from 'react';
import {Button, Grid} from '@mui/material';
import axios from 'axios';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';
import FilterLoggedIn from '../../components/Logged-In/FilterLoggedIn';
import Filter from '../../components/Filter';

function MyFeed() {

    

    return (
        <>
            <NavLoggedIn />
            <Grid sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, 350px)", justifyContent: "center", gridGap: "30px", paddingTop: "50px"}}>
                <FilterLoggedIn />
            </Grid>
        </>
    );
}

export default MyFeed;