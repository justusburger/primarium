import { combineReducers } from "redux";
import * as Actions from "./Actions";

function login(state = {}, action) {
  switch(action.type) {

    case Actions.PROFILE_LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        token: null,
        error: null
      });

    case Actions.PROFILE_LOGIN_COMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
        token: action.token
      });

    case Actions.PROFILE_LOGIN_FAILED:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      });

    default:
      return state;
      break;
  }
}

function session(state = {}, action) {
  switch(action.type) {

    case Actions.PROFILE_CHECK_SESSION_REQUEST:
      return Object.assign({}, state, {
        isChecking: true,
        returnPath: action.returnPath
      });

    case Actions.PROFILE_CHECK_SESSION_COMPLETE:
      return Object.assign({}, state, {
        isChecking: false,
        profile: action.profile,
        token: action.token,
        returnPath: null
      });

    case Actions.PROFILE_CHECK_SESSION_EXPIRED:
      return Object.assign({}, state, {
        isChecking: false,
        isExpired: true,
        profile: null
      });

    case Actions.PROFILE_CHECK_SESSION_FAILED:
      return Object.assign({}, state, {
        isChecking: false,
        profile: null
      });

    default:
      return state;
      break;
  }
}

export default combineReducers({
  login,
  session
});