import { combineReducers } from "redux";
import * as Actions from "./Actions";

function login(state = {}, action) {
  switch(action.type) {
    case Actions.PROFILE_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        token: null
      });
      break;
    case Actions.PROFILE_LOGIN_COMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
        token: action.token
      });
      break;
    case Actions.PROFILE_LOGIN_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });
      break;
    default:
      return state;
      break;
  }
}

export default combineReducers({
  login
});