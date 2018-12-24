import React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import { mockStore } from "../store";

export function renderWithRedux(ui: React.ReactElement<any>) {
  return { ...render(<Provider store={mockStore}>{ui}</Provider>), mockStore };
}
