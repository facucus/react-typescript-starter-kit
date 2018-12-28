import axios, { AxiosPromise } from "axios";

export interface IApiUsers {
  getUsers: () => AxiosPromise<any>;
}

export default {
  getUsers: () => axios.get("https://swapi.co/api/people/")
};
