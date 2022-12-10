import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TheFeed from "../pages/Logged-Out/TheFeed";
import MyFeed from "../pages/Logged-In/MyFeed";
import MyRecipes from "../pages/Logged-In/MyRecipes";
import MyRecipeFull from "../pages/Logged-In/MyRecipeFull";
import RecipeFull from "../pages/Logged-Out/RecipeFull";
import Shopping from "../pages/Logged-In/Shopping";
import Upload from "../pages/Logged-In/Upload";
import ProtectedRoutes from "./ProtectedRoutes";

function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<TheFeed />} />
                <Route path="/loggedoutfullview/:_id" element={<RecipeFull />} />
            <Route element={<ProtectedRoutes />}>
                <Route path="/myfeed" element={<MyFeed />} />
                <Route path="/myrecipes" element={<MyRecipes />} />
                <Route path="/loggedinfullview/:_id" element={<MyRecipeFull />} />
                <Route path="/shoppinglist" element={<Shopping />} />
                <Route path="/uploadnew" element={<Upload />} />
            </Route>
                <Route path="*" element={<h1>404: Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Routing;