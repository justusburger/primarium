import { createSelector } from 'reselect';

export const getSession = createSelector(
  state => state.profile.session,
  session => session
);

export const getLogin = createSelector(
  state => state.profile.login,
  login => login
);