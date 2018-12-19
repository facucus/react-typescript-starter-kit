import "jest-dom/extend-expect";
import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import Test from "./Test";

afterEach(cleanup);

describe("Testing Test component", () => {
  test("Checking correct Title", () => {
    const { getByTestId } = render(<Test text="hola" />);

    expect(getByTestId("title-text")).toHaveTextContent("Hola Mundo");
  });

  test("Checking correct Title", () => {
    const { container } = render(<Test text="This is my test" />);

    const text = container.querySelector("p");
    expect(text).toHaveTextContent("This is my test");
  });

  test("Match Snapshot", () => {
    const { container } = render(<Test text="hola" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
