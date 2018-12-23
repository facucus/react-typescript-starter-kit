import { Action } from "../actions/users";
import { UsersActionType } from "../constants";

export interface IUser {
  name: string;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: any;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  skin_color: string;
  species: any;
  starships: any;
  url: string;
  vehicles: any;
}

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
