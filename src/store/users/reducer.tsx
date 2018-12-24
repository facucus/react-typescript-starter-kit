import { Action } from "./actions";
import { UsersActionType } from "./constants";
import { IUser } from "./models";

export interface IUsersState {
  users: IUser[];
  isFetching: boolean;
  error: string;
}

const initialState: IUsersState = {
  users: [],
  isFetching: false,
  error: ""
};

const users = (
  state: IUsersState = initialState,
  action: Action
): IUsersState => {
  switch (action.type) {
    case UsersActionType.FETCHING_USERS:
      return { ...state, isFetching: true, error: "" };
    case UsersActionType.FETCHING_USERS_SUCCESS:
      return { users: action.users, isFetching: false, error: "" };
    case UsersActionType.FETCHING_USERS_ERROR:
      return { users: [], isFetching: false, error: action.error };
    default:
      return state;
  }
};

export default users;
