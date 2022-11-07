import React from 'react';
import LogIn from '../components/LogIn';
import NavLoggedOut from '../components/NavLoggedOut';
import "../components/styles/TheFeed.css";

function TheFeed() {
    return (
        <>
            <NavLoggedOut />
            <LogIn />
        </>
    );
}

export default TheFeed;