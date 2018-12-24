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
    return (
      <div>
        <h1>Users</h1>
        {this.props.users.map((user, index) => (
          <p key={index}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default Users;
