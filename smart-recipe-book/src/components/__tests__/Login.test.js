import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import LogIn from "../Logged-Out/LogIn";

test("Log in button exists", () => {
    render(<LogIn />);
    const loginButton = screen.getByRole("button", {name: "Log in"});
    expect(loginButton).toBeInTheDocument();
});

test("Log in button is clickable", () => {
    render(<LogIn />);
    const loginButton = screen.getByRole("button", {name: "Log in"});
    fireEvent.click(loginButton);
});

test("Log in form fields are required", () => {
    render(<LogIn />);
    const loginButton = screen.getByRole("button", {name: "Log in"});
    fireEvent.click(loginButton);
    const emailField = screen.getByRole("textbox", {name: "Email"});
    const passwordField = screen.getByLabelText("Password");
    expect(emailField).toBeRequired();
    expect(passwordField).toBeRequired();
});