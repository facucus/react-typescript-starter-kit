import React, { PureComponent, Dispatch } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "./components/Loading/Loading";
import Login from "./containers/Login";
import * as actions from "./actions/login";
import { IAppState } from "./types";
import ProtectedApp from "./ProtectedApp";
import { RouteComponentProps } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
interface IAppProps extends RouteComponentProps {
  onChangeLoggedIn: (value: boolean) => void;
  loggedIn?: boolean;
}

class App extends PureComponent<IAppProps> {
  public render() {
    if (this.props.loggedIn === null) {
      return <Loading />;
    }

    return (
      <Switch>
        <Route path="/login/" component={Login} />
        <ProtectedRoute component={ProtectedApp} />
      </Switch>
    );
  }
}

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

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
