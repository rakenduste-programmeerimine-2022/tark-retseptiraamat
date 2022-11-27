import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TheFeed from "../pages/TheFeed";
import MyFeed from "../pages/MyFeed";
import MyRecipes from "../pages/MyRecipes";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TheFeed />} />
                <Route path="/myfeed" element={<MyFeed />} />
                <Route path="/myrecipes" element={<MyRecipes />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;