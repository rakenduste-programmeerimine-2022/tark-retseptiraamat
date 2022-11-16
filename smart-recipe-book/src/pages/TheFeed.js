import React from 'react';
import NavLoggedOut from '../components/NavLoggedOut';
import MakeCard from '../components/MakeCard';
import data from '../components/data.js';
//import pizza from '../components/pizza.jpg';

function TheFeed() {
    return (
        <>
            <NavLoggedOut />
            {data.map(data => (
                <MakeCard 
                    key={data.id}
                    image={data.image}
                    title={data.title}
                    description={data.description}
                    url={data.url}
                />
            ))}
        </>
    );
}

export default TheFeed;