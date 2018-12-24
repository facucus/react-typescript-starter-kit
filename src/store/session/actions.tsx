import { Dispatch } from "redux";
import { SessionActionType } from "./constants";
import { IApiServices } from "../../api";
import { IAppState } from "..";

export interface ILoginStarted {
  type: SessionActionType.LOGIN_STARTED;
}

export interface ILoginSuccess {
  type: SessionActionType.LOGIN_SUCCESS;
  token: string;
}

export interface ILoginError {
  type: SessionActionType.LOGIN_ERROR;
  error: string;
}

export interface ILogout {
  type: SessionActionType.LOGOUT;
}

export type Action = ILoginStarted | ILoginSuccess | ILoginError | ILogout;

export const loginStarted = (): ILoginStarted => ({
  type: SessionActionType.LOGIN_STARTED
});

export const loginSuccess = (token: string): ILoginSuccess => ({
  type: SessionActionType.LOGIN_SUCCESS,
  token
});

export const loginError = (error: string): ILoginError => ({
  type: SessionActionType.LOGIN_ERROR,
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
  type: SessionActionType.LOGOUT
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
