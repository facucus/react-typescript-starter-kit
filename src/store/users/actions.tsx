import { Dispatch } from "redux";
import { UsersActionType } from "./constants";
import { IApiServices } from "../../api";
import { IAppState } from "../";

export interface IFetchingUsersAction {
  type: UsersActionType.FETCHING_USERS;
}

export interface IFetchingUsersSuccessAction {
  type: UsersActionType.FETCHING_USERS_SUCCESS;
  users: [];
}

export interface IFetchingUsersErrorAction {
  type: UsersActionType.FETCHING_USERS_ERROR;
  error: string;
}

export type Action =
  | IFetchingUsersAction
  | IFetchingUsersSuccessAction
  | IFetchingUsersErrorAction;

export const fetchingUsers = (): IFetchingUsersAction => ({
  type: UsersActionType.FETCHING_USERS
});

export const fetchingUsersSuccess = (
  users: any
): IFetchingUsersSuccessAction => ({
  type: UsersActionType.FETCHING_USERS_SUCCESS,
  users
});

export const fetchingUsersError = (
  error: string
): IFetchingUsersErrorAction => ({
  type: UsersActionType.FETCHING_USERS_ERROR,
  error
});

export const fetchUsers = () => {
  return async (
    dispatch: Dispatch,
    getState: () => IAppState,
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
