import { POST, authNamespace } from "../common/utilities/resource";
import { push } from "react-router-redux";

export const PROFILE_LOGIN_REQUEST = '@@profile/PROFILE_AUTH_REQUEST';
function profileLoginRequest() {
  return { type: PROFILE_LOGIN_REQUEST };
}

export const PROFILE_LOGIN_COMPLETE = '@@profile/PROFILE_LOGIN_COMPLETE';
function profileLoginComplete(token) {
  return { type: PROFILE_LOGIN_COMPLETE, token };
}

export const PROFILE_LOGIN_FAILED = '@@profile/PROFILE_LOGIN_FAILED';
function profileLoginFailed(error) {
  return { type: PROFILE_LOGIN_FAILED, error };
}

export function login(username, password) {
  return function(dispatch) {
    dispatch(profileLoginRequest());
    return POST('/token', { username, password }, authNamespace).then((response) => {
      dispatch(profileLoginComplete(response.data.token));
      dispatch(push('/'));
    }, (response) => {
      dispatch(profileLoginFailed(response.data.message));
    });
  };
}