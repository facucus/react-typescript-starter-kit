import users, { IApiUsers } from "./users";
import session, { IApiLogin } from "./session";

export interface IApiServices {
  users: IApiUsers;
  session: IApiLogin;
}

export default {
  users,
  session
};
