import React from 'react';

import NavLoggedOut from '../../components/Logged-Out/NavLoggedOut';
import Filter from '../../components/Filter';

function TheFeed() {
    
    return (
        <>
            <NavLoggedOut />
            <Filter />
        </>
    );
}

export default TheFeed;