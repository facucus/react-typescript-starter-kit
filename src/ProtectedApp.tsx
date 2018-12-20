import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { Link, Redirect, Route, Switch, RouteProps } from "react-router-dom";
import * as actions from "./actions/login";
import { IAppState } from "./types";

const Nav = () => (
  <ul>
    <Link to="/friends/">
      <li>Friends</li>
    </Link>
    <Link to="/books/">
      <li>Books</li>
    </Link>
  </ul>
);

const Friends: React.SFC<{}> = () => <h1>Friends</h1>;
const Books: React.SFC<{}> = () => <h1>Books</h1>;

interface IProtectedAppProps extends RouteProps {
  onChangeLoggedIn: (newValus: boolean) => void;
  loggedIn: boolean;
}

const ProtectedApp: React.SFC<IProtectedAppProps> = props => {
  function closeSession(): void {
    props.onChangeLoggedIn(false);
  }

  return (
    <div>
      <Nav />
      <button onClick={closeSession}>Logout</button>
      <Switch>
        <Route exact={true} path="/friends/" component={Friends} />
        <Route exact={true} path="/books/" component={Books} />
        <Redirect exact={true} from="/" to="/friends/" />
      </Switch>
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
)(ProtectedApp);
