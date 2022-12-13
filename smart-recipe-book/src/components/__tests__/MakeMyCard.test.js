import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import MakeMyCard from "../Logged-In/MakeMyCard";
import "@testing-library/jest-dom/extend-expect"

test ("card media exists", () => {
    render(<MakeMyCard />);
    expect(screen.getByTestId("card-media")).toBeInTheDocument();
});

test("card title exists", () => {
    render(<MakeMyCard />);
    expect(screen.getByTestId("card-title")).toBeInTheDocument();
});

test("card description exists", () => {
    render(<MakeMyCard />);
    expect(screen.getByTestId("card-description")).toBeInTheDocument();
});

test("view more button exists", () => {
    render(<MakeMyCard />);
    expect(screen.getByTestId("card-button")).toBeInTheDocument();
});