import React from "react";
import { connect } from "react-redux";
import {
  Redirect,
  Route,
  RouteComponentProps,
  RouteProps
} from "react-router-dom";
import { IAppState } from "../../store";

interface IProtectedRouteProps extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
  loggedIn?: boolean;
}

type RenderComponent = (props: RouteComponentProps<any>) => React.ReactNode;

class ProtectedRoute extends Route<IProtectedRouteProps> {
  public render() {
    const { component: Component, ...rest }: IProtectedRouteProps = this.props;
    const renderComponent: RenderComponent = props =>
      rest.loggedIn ? <Component {...props} /> : <Redirect to="/login" />;

    return <Route {...rest} render={renderComponent} />;
  }
}

function mapStateToProps({ session }: IAppState) {
  return {
    loggedIn: session.loggedIn
  };
}

export default connect(mapStateToProps)(ProtectedRoute);
