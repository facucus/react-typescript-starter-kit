import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { ISessionState } from "./reducers/session";
import { IUsersState } from "./reducers/users";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import apiService, { mockApiService } from "./api";
export interface IAppState {
  session: ISessionState;
  users: IUsersState;
}

export const mockStore = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(mockApiService))
);

export const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(apiService)))
);
