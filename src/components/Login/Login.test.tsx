import "jest-dom/extend-expect";
import "react-testing-library/cleanup-after-each";
import "jest-axe/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import Login from "./Login";

describe("Login Page", () => {
  const props = {
    loggedIn: false,
    onChangeLoggedIn: jest.fn()
  };

  test("It should have a Login title <h1>", () => {
    const { container } = render(<Login {...props} />);

    const title = container.querySelector("h1");

    expect(title).toHaveTextContent("Login");
  });

  test("Match Snapshot", () => {
    const { container } = render(<Login {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
