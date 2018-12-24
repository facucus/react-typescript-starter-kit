import React from "react";
import { renderWithRedux } from "../../Utils/renderWithRedux";
import UsersContainer from "./";
import { wait } from "react-testing-library";
import { fakeGetUsersResponse } from "../../api/users";

describe("Testing the users route", () => {
  const routeProps = { match: {}, history: {}, location: {} };

  test("Should fetch users", async () => {
    const { rerender, mockStore } = renderWithRedux(
      <UsersContainer {...routeProps} />
    );

    renderWithRedux(<UsersContainer {...routeProps} />);

    const { results } = fakeGetUsersResponse.data;

    await wait(() => {
      expect(mockStore.getState().users.users).toHaveLength(results.length);
      expect(mockStore.getState().users.users).toEqual(results);
    });
  });
});
