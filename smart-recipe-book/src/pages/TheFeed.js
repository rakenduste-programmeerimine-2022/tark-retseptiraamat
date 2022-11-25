import React from 'react';
import NavLoggedOut from '../components/NavLoggedOut';

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
                    url={data.url}
                />
            ))}
            </Grid>
        </>
    );
}

export default TheFeed;