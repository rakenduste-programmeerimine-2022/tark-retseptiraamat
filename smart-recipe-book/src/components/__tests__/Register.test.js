import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import Register from "../Logged-Out/Register";

test("Register button exists", () => {
    render(<Register />);
    const registerButton = screen.getByRole("button", {name: "Register"});
    expect(registerButton).toBeInTheDocument();
});

test("Register button is clickable", () => {
    render(<Register />);
    const registerButton = screen.getByRole("button", {name: "Register"});
    fireEvent.click(registerButton);
});

test("Register form fields are required", () => {
    render(<Register />);
    const registerButton = screen.getByRole("button", {name: "Register"});
    fireEvent.click(registerButton);
    const emailField = screen.getByRole("textbox", {name: "Email"});
    const passwordField = screen.getByLabelText("Password");
    const usernameField = screen.getByLabelText("Username");
    expect(emailField).toBeRequired();
    expect(passwordField).toBeRequired();
    expect(usernameField).toBeRequired();
});