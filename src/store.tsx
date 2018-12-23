import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { ILoginState } from "./reducers/login";
import { IUsersState } from "./reducers/users";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import apiService from "./api";
export interface IAppState {
  login: ILoginState;
  users: IUsersState;
}

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiService)))
);
