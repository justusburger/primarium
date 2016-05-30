import { POST, authNamespace } from "../common/utilities/resource";
import { push } from "react-router-redux";
import { getProfile, getToken } from "./Resource";
import { getSession } from "./Selectors";

export const PROFILE_LOGIN_REQUEST = '@@profile/PROFILE_AUTH_REQUEST';
function profileLoginRequest() {
  return { type: PROFILE_LOGIN_REQUEST };
}

export const PROFILE_LOGIN_COMPLETE = '@@profile/PROFILE_LOGIN_COMPLETE';
function profileLoginComplete(token, profile) {
  return { type: PROFILE_LOGIN_COMPLETE, token, profile };
}

export const PROFILE_LOGIN_FAILED = '@@profile/PROFILE_LOGIN_FAILED';
function profileLoginFailed(error) {
  return { type: PROFILE_LOGIN_FAILED, error };
}

export function login(username, password) {
  return function(dispatch) {
    dispatch(profileLoginRequest());

    return getToken(username, password).then(response => {
      dispatch(profileCheckSessionComplete(response.token, response.profile));
      dispatch(push('/'));
    }, error => dispatch(profileLoginFailed(error)));
  };
}

export const PROFILE_CHECK_SESSION_REQUEST = '@@profile/PROFILE_CHECK_SESSION_REQUEST';
function profileCheckSessionRequest(returnPath) {
  return { type: PROFILE_CHECK_SESSION_REQUEST, returnPath };
}

export const PROFILE_CHECK_SESSION_COMPLETE = '@@profile/PROFILE_CHECK_SESSION_COMPLETE';
function profileCheckSessionComplete(token, profile) {
  return { type: PROFILE_CHECK_SESSION_COMPLETE, token, profile };
}

export const PROFILE_CHECK_SESSION_FAILED = '@@profile/PROFILE_CHECK_SESSION_FAILED';
function profileCheckSessionFailed() {
  return { type: PROFILE_CHECK_SESSION_FAILED };
}

export const PROFILE_CHECK_SESSION_EXPIRED = '@@profile/PROFILE_CHECK_SESSION_EXPIRED';
function profileCheckSessionExpired() {
  return { type: PROFILE_CHECK_SESSION_EXPIRED };
}

export function checkSession(returnPath) {
  return (dispatch, getState) => {
    dispatch(push('/login'));
    dispatch(profileCheckSessionRequest(returnPath));
    const state = getState();
    const session = getSession(state);

    if(!session.token)
      dispatch(profileCheckSessionFailed());
    else
      return getProfile(session.token).then((profile) => {
        dispatch(push(returnPath));
        dispatch(profileCheckSessionComplete(profile));
      }, () => dispatch(profileCheckSessionExpired()));
  };
}

