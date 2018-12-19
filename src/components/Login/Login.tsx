import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { IAppState } from "../../types/index";
import * as actions from "../../actions/login";

const Login = (props: any) => {
  if (props.loggedIn) {
    const { from } = props.location.state || { from: { pathname: "/" } };
    return <Redirect to={from} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <button
        // tslint:disable-next-line:jsx-no-lambda
        onClick={() => {
          props.onChangeLoggedIn(true);
        }}
      >
        Login
      </button>
    </div>
  );
};

function mapStateToProps({ login }: IAppState) {
  return {
    loggedIn: login.loggedIn
  };
}

function mapDispatchToProps(dispatch: Dispatch<actions.IChangeLoggedIn>) {
  return {
    onChangeLoggedIn: (newValue: boolean) =>
      dispatch(actions.changeLogin(newValue))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
