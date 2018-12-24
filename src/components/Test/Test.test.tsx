import React from "react";
import { render, fireEvent } from "react-testing-library";
import Test from "./Test";

describe("Testing Test component", () => {
  const defaultProps = {
    text: "This is my test",
    onClick: jest.fn()
  };
  test("Checking correct Title", () => {
    const { getByTestId } = render(<Test {...defaultProps} />);

    expect(getByTestId("title-text")).toHaveTextContent("Hola Mundo");
  });

  test("Checking correct Title", () => {
    const { container } = render(<Test {...defaultProps} />);

    const text = container.querySelector("p");
    expect(text).toHaveTextContent("This is my test");
  });

  test("Button click", () => {
    const { getByText, debug } = render(<Test {...defaultProps} />);
    const button = getByText(/click me/i);
    fireEvent.click(button);
    expect(defaultProps.onClick).toHaveBeenCalledTimes(1);
  });

  test("Match Snapshot", () => {
    const { container } = render(<Test {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
