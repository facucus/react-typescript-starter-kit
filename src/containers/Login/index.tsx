import { Dispatch } from "react";
import { IAppState } from "../../store";
import * as actions from "../../actions/login";
import { connect } from "react-redux";
import Login from "../../components/Login/Login";

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
