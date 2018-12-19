import { CHANGE_LOGGED_IN } from "../constants";
import { IChangeLoggedIn } from "../actions/login";
import { ILoginState } from "../types/index";

const initalState: ILoginState = {
  loggedIn: false
};

const login = (
  state: ILoginState = initalState,
  action: IChangeLoggedIn
): ILoginState => {
  switch (action.type) {
    case CHANGE_LOGGED_IN:
      return { loggedIn: action.newValue };

    default:
      return state;
  }
};

export default login;
