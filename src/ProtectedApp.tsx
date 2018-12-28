import React, { Dispatch } from "react";
import { connect } from "react-redux";
import { Link, Redirect, Route, Switch, RouteProps } from "react-router-dom";
import * as actions from "./store/session/actions";
import { IAppState } from "./store";
import Users from "./containers/Users";
import { ThunkDispatch } from "redux-thunk";
import Button from "./components/ui/Button/Button";
const Nav = () => (
  <ul>
    <Link to="/friends/">
      <li>Friends</li>
    </Link>
    <Link to="/users/">
      <li>Users</li>
    </Link>
  </ul>
);

const Friends: React.SFC<{}> = () => <h1>Friends</h1>;

interface IProtectedAppProps extends RouteProps {
  onLogout: () => void;
  loggedIn: boolean;
}

const ProtectedApp: React.SFC<IProtectedAppProps> = props => {
  function closeSession(): void {
    props.onLogout();
  }

  return (
    <div>
      <Nav />
      <Button onClick={closeSession}>Logout</Button>
      <Switch>
        <Route exact={true} path="/friends/" component={Friends} />
        <Route exact={true} path="/users/" component={Users} />
        <Redirect exact={true} from="/" to="/friends/" />
      </Switch>
    </div>
  );
};

function mapStateToProps({ session }: IAppState) {
  return {
    loggedIn: session.loggedIn
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
  return { onLogout: () => dispatch(actions.fetchLogout()) };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProtectedApp);
