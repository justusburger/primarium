import axios from "axios";
import { combineReducers } from "redux";
import * as Actions from "./Actions";

const url = 'http://localhost:8000/wp-json/wp/v2/users';

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

export default combineReducers({
  list
});