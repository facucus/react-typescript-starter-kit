import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";

import styles from "./login.module.scss";
import Form from "./Form";

interface ILoginProps extends RouteComponentProps {
  loggedIn: boolean;
  onChangeLoggedIn: (newValue: boolean) => void;
  onFetchLogin: (userData: { username: string; password: string }) => void;
}

class Login extends React.Component<ILoginProps, {}> {
  public submitForm = () => {
    this.props.onFetchLogin({ username: "test", password: "test" });
  };
  public render() {
    if (this.props.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={from} />;
    }
    return (
      <div>
        <h1 className={styles.title}>Login</h1>
        <Form onClick={this.submitForm} />
      </div>
    );
  }
}

export default Login;
