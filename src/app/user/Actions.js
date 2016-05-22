import axios from "axios";

/* Action types */
export const USER_LIST_FETCH_REQUEST = '@@user/FETCH_USER_LIST_REQUEST';
function userListFetchRequest() {
  return { type: USER_LIST_FETCH_REQUEST };
}

export const USER_LIST_FETCH_COMPLETE = '@@user/FETCH_USER_LIST_COMPLETE';
function userListFetchComplete(items, receivedAt) {
  return { type: USER_LIST_FETCH_COMPLETE, items, receivedAt };
}

export const USER_LIST_FETCH_FAILED = '@@user/FETCH_USER_LIST_FAILED';
export const USER_LIST_INVALIDATE = '@@user/USER_LIST_INVALIDATE';

/* Action creators */
export function userListFetch() {
  return function(dispatch) {
    dispatch(userListFetchRequest());

    return axios({
      url: 'http://localhost:8000/wp-json/wp/v2/users',
      method: 'GET',
      headers: { 'Authorization': 'Basic YWRtaW46MW5kM24xQGw=' }
    }).then((response) => {
      dispatch(userListFetchComplete(response.data, Date.now()));
    });
  };
}