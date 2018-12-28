import React from "react";
import { RouteProps } from "react-router-dom";
import Loading from "../../ui/Loading";
import { IUser } from "../../../store/users/models";

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
    if (this.props.isFetching) {
      return <Loading />;
    }
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
