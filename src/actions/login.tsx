import * as constants from "../constants";

export interface IChangeLoggedIn {
  type: constants.CHANGE_LOGGED_IN;
  newValue: boolean;
}

export function changeLogin(newValue: boolean): IChangeLoggedIn {
  return {
    type: constants.CHANGE_LOGGED_IN,
    newValue
  };
}
