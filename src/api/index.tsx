import users, { IApiUsers } from "./users";

export interface IApiServices {
  users: IApiUsers;
}

export default {
  users
};
