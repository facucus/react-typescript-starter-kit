import users, { IApiUsers, mockUsers } from "./users";
import session, { IApiLogin, mockSession } from "./session";

export interface IApiServices {
  users: IApiUsers;
  session: IApiLogin;
}

export const mockApiService = {
  users: mockUsers,
  session: mockSession
};

export default {
  users,
  session
};
