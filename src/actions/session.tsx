import { Dispatch } from "redux";
import { CHANGE_LOGGED_IN, LoginActionType } from "../constants";
import { IApiServices } from "../api";
import { IAppState } from "../store";
export interface IChangeLoggedIn {
  type: CHANGE_LOGGED_IN;
  newValue: boolean;
}

export interface ILoginStarted {
  type: LoginActionType.LOGIN_STARTED;
}

export interface ILoginSuccess {
  type: LoginActionType.LOGIN_SUCCESS;
  token: string;
}

export interface ILoginError {
  type: LoginActionType.LOGIN_ERROR;
  error: string;
}

export interface ILogout {
  type: LoginActionType.LOGOUT;
}

export type Action =
  | IChangeLoggedIn
  | ILoginStarted
  | ILoginSuccess
  | ILoginError
  | ILogout;

export function changeLogin(newValue: boolean): IChangeLoggedIn {
  return {
    type: CHANGE_LOGGED_IN,
    newValue
  };
}

export const loginStarted = (): ILoginStarted => ({
  type: LoginActionType.LOGIN_STARTED
});

export const loginSuccess = (token: string): ILoginSuccess => ({
  type: LoginActionType.LOGIN_SUCCESS,
  token
});

export const loginError = (error: string): ILoginError => ({
  type: LoginActionType.LOGIN_ERROR,
  error
});

export const fetchLogin = (userData: {
  username: string;
  password: string;
}) => {
  return async (
    dispatch: Dispatch,
    getState: () => IAppState,
    apiService: IApiServices
  ) => {
    dispatch(loginStarted());

    try {
      const response = await apiService.session.login(userData);
      dispatch(loginSuccess(response));
    } catch (error) {
      dispatch(loginError(error.message));
    }
  };
};

export const logoutSuccess = (): ILogout => ({
  type: LoginActionType.LOGOUT
});

export const fetchLogout = () => {
  return async (
    dispatch: Dispatch,
    getState: () => IAppState,
    apiService: IApiServices
  ) => {
    const response = await apiService.session.logout();
    dispatch(logoutSuccess());
  };
};
