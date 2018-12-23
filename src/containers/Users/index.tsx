import { connect } from "react-redux";
import { IAppState } from "../../store";
import * as actions from "../../actions/users";
import Users from "../../components/Users/Users";
import { ThunkDispatch } from "redux-thunk";

function mapStateToProps(state: IAppState) {
  return {
    users: state.users.users,
    error: state.users.error,
    isFetching: state.users.isFetching
  };
}

function mapDispatchToProps(dispatch: ThunkDispatch<any, any, any>) {
  return {
    onFetchUsers: () => dispatch(actions.fetchUsers())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
