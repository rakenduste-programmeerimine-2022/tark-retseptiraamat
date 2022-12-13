import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import NavLoggedOut from "../Logged-Out/NavLoggedOut";
import "@testing-library/jest-dom/extend-expect"

test("Login button exists", () => {
    render(<NavLoggedOut />);
    expect(screen.getByText("Login")).toBeInTheDocument();
});

test("Login button is clickable", () => {
    render(<NavLoggedOut />);
    fireEvent.click(screen.getByText("Login"));
});

test("Register button exists", () => {
    render(<NavLoggedOut />);
    expect(screen.getByText("Register")).toBeInTheDocument();
});

test("Register button is clickable", () => {
    render(<NavLoggedOut />);
    fireEvent.click(screen.getByText("Register"));
});

