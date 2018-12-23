import { Dispatch } from "redux";
import {
  FETCHING_USERS,
  FETCHING_USERS_SUCCESS,
  FETCHING_USERS_ERROR
} from "../constants";
import { IApiServices } from "../api";

export interface IFetchingUsersAction {
  type: FETCHING_USERS;
}

export interface IFetchingUsersSuccessAction {
  type: FETCHING_USERS_SUCCESS;
  users: [];
}

export interface IFetchingUsersErrorAction {
  type: FETCHING_USERS_ERROR;
  error: string;
}

export type Action =
  | IFetchingUsersAction
  | IFetchingUsersSuccessAction
  | IFetchingUsersErrorAction;

export const fetchingUsers = (): IFetchingUsersAction => ({
  type: FETCHING_USERS
});

export const fetchingUsersSuccess = (
  users: any
): IFetchingUsersSuccessAction => ({
  type: FETCHING_USERS_SUCCESS,
  users
});

export const fetchingUsersError = (
  error: string
): IFetchingUsersErrorAction => ({
  type: FETCHING_USERS_ERROR,
  error
});

export const fetchUsers = () => {
  return async (
    dispatch: Dispatch,
    getState: () => any,
    apiService: IApiServices
  ) => {
    dispatch(fetchingUsers());
    try {
      const response = await apiService.users.getUsers();
      dispatch(fetchingUsersSuccess(response.data.results));
    } catch (error) {
      dispatch(fetchingUsersError(error));
    }
  };
};
