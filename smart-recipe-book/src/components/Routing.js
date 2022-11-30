import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TheFeed from "../pages/Logged-Out/TheFeed";
import MyFeed from "../pages/Logged-In/MyFeed";
import MyRecipes from "../pages/Logged-In/MyRecipes";
import MyRecipeFull from "../pages/Logged-In/MyRecipeFull";
import RecipeFull from "../pages/Logged-Out/RecipeFull";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TheFeed />} />
                <Route path="/myfeed" element={<MyFeed />} />
                <Route path="/myrecipes" element={<MyRecipes />} />
                <Route path="/loggedinfullview/:_id" element={<MyRecipeFull />} />
                <Route path="/loggedoutfullview/:_id" element={<RecipeFull />} />
                <Route path="*" element={<h1>404: Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;