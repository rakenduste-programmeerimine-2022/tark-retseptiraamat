import React from "react";
import {render, fireEvent, screen} from "@testing-library/react";
import MakeCard from "../Logged-Out/MakeCard";
import "@testing-library/jest-dom/extend-expect"

test ("card media exists", () => {
    render(<MakeCard />);
    expect(screen.getByTestId("card-media")).toBeInTheDocument();
});

test("card title exists", () => {
    render(<MakeCard />);
    expect(screen.getByTestId("card-title")).toBeInTheDocument();
});

test("card description exists", () => {
    render(<MakeCard />);
    expect(screen.getByTestId("card-description")).toBeInTheDocument();
});

test("view more button exists", () => {
    render(<MakeCard />);
    expect(screen.getByTestId("card-button")).toBeInTheDocument();
});