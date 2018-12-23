import { CHANGE_LOGGED_IN, LoginActionType } from "../constants";
import { Action } from "../actions/session";

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
    case LoginActionType.LOGIN_STARTED:
      return {
        ...state,
        isFetching: true
      };
    case LoginActionType.LOGIN_SUCCESS:
      return {
        isFetching: false,
        loggedIn: true,
        token: action.token,
        error: ""
      };
    case LoginActionType.LOGIN_ERROR:
      return {
        ...state,
        loggedIn: false,
        isFetching: false,
        token: "",
        error: action.error
      };
    case LoginActionType.LOGOUT:
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
