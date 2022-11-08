import React from 'react';
import NavLoggedOut from '../components/NavLoggedOut';
import LogIn from '../components/LogIn';

function TheFeed() {
    return (
        <>
            <NavLoggedOut />
            <LogIn />
        </>
    );
}

export default TheFeed;