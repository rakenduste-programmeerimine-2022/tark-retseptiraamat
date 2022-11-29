import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TheFeed from "../pages/TheFeed";
import MyFeed from "../pages/MyFeed";
import MyRecipes from "../pages/MyRecipes";
import Recipe from "../pages/Recipe";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TheFeed />} />
                <Route path="/myfeed" element={<MyFeed />} />
                <Route path="/myrecipes" element={<MyRecipes />} />
                <Route path="/fullview/:_id" element={<Recipe />} />
                <Route path="*" element={<h1>404: Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;