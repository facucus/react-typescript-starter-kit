import React, { PureComponent, Dispatch } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import Loading from "./components/Loading/Loading";
import Login from "./containers/Login";
import { IAppState } from "./store";
import ProtectedApp from "./ProtectedApp";
import { RouteComponentProps } from "react-router";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
interface IAppProps extends RouteComponentProps {
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

function mapStateToProps({ session }: IAppState) {
  return {
    loggedIn: session.loggedIn
  };
}

export default withRouter(connect(mapStateToProps)(App));
