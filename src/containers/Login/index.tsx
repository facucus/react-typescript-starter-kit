import { IAppState } from "../../store";
import * as actions from "../../store/session/actions";
import { connect } from "react-redux";
import Login from "../../components/Login/Login";
import { ThunkDispatch } from "redux-thunk";

function mapStateToProps({ session }: IAppState) {
  return {
    loggedIn: session.loggedIn,
    error: session.error
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
  return {
    onFetchLogin: (userData: { username: string; password: string }) =>
      dispatch(actions.fetchLogin(userData))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
