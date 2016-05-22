import { GET, PUT } from "../common/utilities/resource";
import { toCamelCase, toDashCase } from "../common/utilities/convert";

/* User list */
export const USER_LIST_FETCH_REQUEST = '@@user/FETCH_USER_LIST_REQUEST';
function userListFetchRequest() {
  return { type: USER_LIST_FETCH_REQUEST };
}

export const USER_LIST_FETCH_COMPLETE = '@@user/FETCH_USER_LIST_COMPLETE';
function userListFetchComplete(items, receivedAt) {
  return { type: USER_LIST_FETCH_COMPLETE, items, receivedAt };
}

export function userListFetch() {
  return function(dispatch) {
    dispatch(userListFetchRequest());

    return GET('/users?context=edit').then((users) => {
      dispatch(userListFetchComplete(users, Date.now()));
    });
  };
}

/* User details */
export const USER_DETAILS_FETCH_REQUEST = '@@user/USER_DETAILS_FETCH_REQUEST';
function userDetailsFetchRequest(id) {
  return { type: USER_DETAILS_FETCH_REQUEST, id };
}

export const USER_DETAILS_FETCH_COMPLETE = '@@user/USER_DETAILS_FETCH_COMPLETE';
function userDetailsFetchComplete(user, receivedAt) {
  return { type: USER_DETAILS_FETCH_COMPLETE, user, receivedAt };
}

export const USER_DETAILS_UPDATE_REQUEST = '@@user/USER_DETAILS_UPDATE_REQUEST';
function userDetailsUpdateRequest() {
  return { type: USER_DETAILS_UPDATE_REQUEST };
}

export const USER_DETAILS_UPDATE_COMPLETE = '@@user/USER_DETAILS_UPDATE_COMPLETE';
function userDetailsUpdateComplete(user, updatedAt) {
  return { type: USER_DETAILS_UPDATE_REQUEST, user, updatedAt };
}

export function userFetch(id) {
  return function(dispatch) {
    dispatch(userDetailsFetchRequest(id));

    return GET('/users/' + id + '?context=edit').then((user) => {
      dispatch(userDetailsFetchComplete(user, Date.now()));
    });
  };
}

export function userUpdate(id, user) {
  return function(dispatch) {
    dispatch(userDetailsUpdateRequest());

    return PUT('/users/' + id, user).then((user) => {
      dispatch(userDetailsUpdateComplete(user, Date.now()));
    });
  };
}
