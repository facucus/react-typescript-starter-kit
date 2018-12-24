import { SessionActionType } from "./constants";
import { Action } from "./actions";

export interface ISessionState {
  isFetching: boolean;
  loggedIn: boolean;
  token: string;
  error: string;
}

const initalState: ISessionState = {
  isFetching: false,
  loggedIn: false,
  token: "",
  error: ""
};

const session = (
  state: ISessionState = initalState,
  action: Action
): ISessionState => {
  switch (action.type) {
    case SessionActionType.LOGIN_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case SessionActionType.LOGIN_SUCCESS:
      return {
        isFetching: false,
        loggedIn: true,
        token: action.token,
        error: ""
      };
    case SessionActionType.LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        isFetching: false,
        token: "",
        error: action.error
      };
    case SessionActionType.LOGOUT:
      return {
        loggedIn: false,
        isFetching: false,
        token: "",
        error: ""
      };
    default:
      return state;
  }
};

export default session;
