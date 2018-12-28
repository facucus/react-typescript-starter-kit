import "jest-axe/extend-expect";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import { axe } from "jest-axe";
import Form from "./index";

describe("Testing the Form component", () => {
  const defaultProps = {
    onClick: jest.fn()
  };

  test("Check button", () => {
    const { getByText, debug } = render(<Form {...defaultProps} />);
    const button = getByText(/click to login/i);
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  test("The Form It should have no violations", async () => {
    const { container } = render(<Form {...defaultProps} />);

    const results = await axe(container.innerHTML);
    expect(results).toHaveNoViolations();
  });
});
