import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";

import styles from "./login.module.scss";
import Form from "./Form";

interface ILoginProps extends RouteComponentProps {
  loggedIn: boolean;
  error?: string;
  onFetchLogin: (userData: { username: string; password: string }) => void;
}

interface ILoginState {
  username?: string;
  password?: string;
}

class Login extends React.Component<ILoginProps, ILoginState> {
  public state = {
    username: "",
    password: ""
  };

  public submitForm = () => {
    const { username, password } = this.state;
    this.props.onFetchLogin({ username, password });
  };

  public onChangeInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ [evt.target.id]: evt.target.value });
  };

  public render() {
    if (this.props.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return <Redirect to={"/"} />;
    }
    return (
      <div>
        <h1 className={styles.title}>Login</h1>
        <Form
          password={this.state.password}
          username={this.state.username}
          onChangeInput={this.onChangeInput}
          onClick={this.submitForm}
        />
        {this.props.error && (
          <p data-testid="login-error-msg">{this.props.error}</p>
        )}
      </div>
    );
  }
}

export default Login;
