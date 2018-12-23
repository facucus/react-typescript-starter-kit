import { Action } from "../actions/users";
import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_ERROR
} from "../constants";

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
    case FETCHING_USERS:
      return {
        ...state,
        isFetching: true,
        error: ""
      };
    case FETCHING_USERS_SUCCESS:
      return {
        users: action.users,
        isFetching: false,
        error: ""
      };
    case FETCHING_USERS_ERROR:
      return {
        users: [],
        isFetching: false,
        error: action.error
      };
    default:
      return state;
  }
};

export default users;
