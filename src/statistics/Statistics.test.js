import React from "react";
import { render, screen } from "@testing-library/react";
import Statistics from './Statistics';

it("Should render the text component.", () => {
    const { getByText } = render(<Statistics />);
    const text = getByText("400+")
    expect(text).toBeTruthy();
})