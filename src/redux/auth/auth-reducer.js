import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import authActions from "./auth-actions";

const user = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.user,
});

const token = createReducer(null, {
  [authActions.registerSuccess]: (_, { payload }) => payload.token,
});

const error = createReducer(null, {
  [authActions.registerFailure]: (_, { payload }) => payload,
});

export default combineReducers({ user, token, error });
