import React from 'react';

import NavLoggedIn from '../../components/Logged-In/NavLoggedIn';
import FilterLoggedIn from '../../components/Logged-In/FilterLoggedIn';

function MyFeed() {

    return (
        <>
            <NavLoggedIn />
            <FilterLoggedIn />
        </>
    );
}

export default MyFeed;