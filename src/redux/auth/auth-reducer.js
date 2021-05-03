import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./auth-actions";

// USER
const innitialUserState = { name: null, email: null };

const user = createReducer(innitialUserState, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
  [authActions.loginSuccess]: (_, { payload }) => payload.user,
  [authActions.logoutSuccess]: () => innitialUserState,
  [authActions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
  [authActions.loginSuccess]: (_, { payload }) => payload.token,
  [authActions.logoutSuccess]: () => null,
});

const error = createReducer(null, {
  [authActions.registerFailure]: (_, { payload }) => payload,
  [authActions.loginFailure]: (_, { payload }) => payload,
  [authActions.logoutFailure]: (_, { payload }) => payload,
  [authActions.getCurrentUserFailure]: (_, { payload }) => payload,
});

export default combineReducers({ user, token, error });
