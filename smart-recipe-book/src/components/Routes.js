import React, { Component } from "react";
import { BrowserRouter, Router, Route, Link } from "react-router-dom";

import TheFeed from "../pages/TheFeed";
import MyFeed from "../pages/MyFeed";
import MyRecipes from "../pages/MyRecipes";

function Routes() {
    return (
        <BrowserRouter>
            <Router>
                <Route exact path="/thefeed" component={TheFeed} />
                <Route exact path="/myfeed" component={MyFeed} />
                <Route exact path="/myrecipes" component={MyRecipes} />
            </Router>
        </BrowserRouter>
    );
};

export default Routes;