import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import NavLoggedIn from "../Logged-In/NavLoggedIn";
import "@testing-library/jest-dom/extend-expect"

test("My Feed button exists", () => {
    render(<NavLoggedIn />);
    const myFeedButton = screen.getByRole("button", {name: "My Feed"});
    expect(myFeedButton).toBeInTheDocument();
});

test("My Feed button works", () => {
    render(<NavLoggedIn />);
    const myFeedButton = screen.getByRole("button", {name: "My Feed"});
    fireEvent.click(myFeedButton);
});

test("My Recipes button exists", () => {
    render(<NavLoggedIn />);
    const myRecipesButton = screen.getByRole("button", {name: "My Recipes"});
    expect(myRecipesButton).toBeInTheDocument();
});

test("My Recipes button works", () => {
    const component= render(<NavLoggedIn />);
    const myRecipesButton = component.getByRole("button", {name: "My Recipes"});
    fireEvent.click(myRecipesButton);
});

test("Log out button exists", () => {
    render(<NavLoggedIn />);
    const logoutButton = screen.getByRole("button", {name: "Log out"});
    expect(logoutButton).toBeInTheDocument();
});

test("Log out works", () => {
    render(<NavLoggedIn />);
    const logoutButton = screen.getByRole("button", {name: "Log out"});
    fireEvent.click(logoutButton);
});

test("Header exists", () => {
    const component= render(<NavLoggedIn />);
    const header = component.getByTestId("header");
    expect(header).toBeInTheDocument();
});