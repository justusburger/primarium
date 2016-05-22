import { combineReducers } from "redux";
import * as Actions from "./Actions";

function list(state = {
  isFetching: false,
  didInvalidate: false,
  items: []
}, action) {
  switch(action.type) {
    case Actions.USER_LIST_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        items: []
      });
      break;
    case Actions.USER_LIST_FETCH_COMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        lastUpdated: action.receivedAt,
        items: action.items
      });
      break;
    default:
      return state;
  }
}

function details(state = {
  isFetching: false,
  isUpdating: false,
  user: {}
}, action) {
  switch(action.type) {
    case Actions.USER_DETAILS_FETCH_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        user: {}
      });
      break;
    case Actions.USER_DETAILS_FETCH_COMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
        user: action.user,
        lastUpdated: action.receivedAt
      });
      break;
    case Actions.USER_DETAILS_UPDATE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isUpdating: true
      });
      break;
    case Actions.USER_DETAILS_UPDATE_COMPLETE:
      return Object.assign({}, state, {
        isFetching: false,
        isUpdating: false,
        user: action.user,
        lastUpdated: action.updatedAt
      });
      break;
    default:
      return state;
  }
}

export default combineReducers({
  list,
  details
});