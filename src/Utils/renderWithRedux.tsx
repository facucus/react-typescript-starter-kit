import React from "react";
import { Provider } from "react-redux";
import { render } from "react-testing-library";
import { store } from "../store";

export function renderWithRedux(ui: React.ReactElement<any>) {
  return { ...render(<Provider store={store}>{ui}</Provider>), store };
}
