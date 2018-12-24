import "jest-axe/extend-expect";
import React from "react";
import { render, fireEvent } from "react-testing-library";
import Login from "./Login";
import { Redirect as MockRedirect } from "react-router-dom";

jest.mock("react-router-dom", () => {
  return {
    Redirect: jest.fn(() => null)
  };
});

afterEach(() => {
  (MockRedirect as jest.Mock<any>).mockClear();
});

describe("Login Page", () => {
  const props = {
    loggedIn: false,
    onFetchLogin: jest.fn(),
    history: {},
    location: {},
    match: {}
  };

  test("It should have a Login title <h1>", () => {
    const { container } = render(<Login {...props} />);

    const title = container.querySelector("h1");

    expect(title).toHaveTextContent("Login");
  });

  test("It should redirect", () => {
    render(<Login {...props} loggedIn={true} />);

    expect(MockRedirect).toHaveBeenCalledTimes(1);
    expect(MockRedirect).toHaveBeenCalledWith({ to: "/" }, {});
  });

  test("Match Snapshot", () => {
    const { container } = render(<Login {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
