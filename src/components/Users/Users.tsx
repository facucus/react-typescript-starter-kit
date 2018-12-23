import React from "react";
import { RouteProps } from "react-router-dom";
import { IUser } from "../../reducers/users";

interface IUsersProps extends RouteProps {
  users: IUser[];
  isFetching: boolean;
  error: string;
  onFetchUsers: () => void;
}

class Users extends React.Component<IUsersProps, {}> {
  public componentDidMount() {
    this.props.onFetchUsers();
  }
  public render() {
    console.log("this.props", this.props);
    return <div>Users</div>;
  }
}

export default Users;
