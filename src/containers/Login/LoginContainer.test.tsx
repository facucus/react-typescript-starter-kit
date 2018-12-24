import { fireEvent, wait } from "react-testing-library";
import LoginContainer from "./";
import React from "react";
import { Redirect as MockRedirect } from "react-router-dom";
import { renderWithRedux } from "../../Utils/renderWithRedux";

jest.mock("react-router-dom", () => {
  return {
    Redirect: jest.fn(() => null)
  };
});

afterEach(() => {
  (MockRedirect as jest.Mock<any>).mockClear();
});

describe("Testing the Login Container component", () => {
  const routeProps = {
    match: {},
    history: {},
    location: {}
  };

  test("It should show error message for invalid credentials", async () => {
    const { getByText, getByLabelText, queryByTestId } = renderWithRedux(
      <LoginContainer {...routeProps} />
    );

    const usernameInput = getByLabelText(/username/i);
    const password = getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "bad username" } });
    fireEvent.change(password, { target: { value: "bad password" } });

    const submitButton = getByText(/click to login/i);
    fireEvent.click(submitButton);

    await wait(() => {
      expect(queryByTestId("login-error-msg")).toBeInTheDocument();
    });
  });

  test("It should login and redirect to Home page", async () => {
    const { getByText, getByLabelText, store } = renderWithRedux(
      <LoginContainer {...routeProps} />
    );

    const usernameInput = getByLabelText(/username/i);
    const password = getByLabelText(/password/i);

    fireEvent.change(usernameInput, { target: { value: "test" } });
    fireEvent.change(password, { target: { value: "test" } });

    const submitButton = getByText(/click to login/i);
    fireEvent.click(submitButton);
    await wait(() => {
      expect(MockRedirect).toHaveBeenCalledTimes(1);
      expect(MockRedirect).toHaveBeenCalledWith({ to: "/" }, {});
    });
  });
});
