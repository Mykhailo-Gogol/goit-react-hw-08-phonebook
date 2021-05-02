import { createAction } from "@reduxjs/toolkit";

// REGISTER
const registerRequest = createAction("auth/REGISTER_R");
const registerSuccess = createAction("auth/REGISTER_S");
const registerFailure = createAction("auth/REGISTER_F");

// LOGIN
const loginRequest = createAction("auth/LOGIN_R");
const loginSuccess = createAction("auth/LOGIN_S");
const loginFailure = createAction("auth/LOGIN_F");

// LOGOUT
const logoutRequest = createAction("auth/LOGOUT_R");
const logoutSuccess = createAction("auth/LOGOUT_S");
const logoutFailure = createAction("auth/LOGOUT_F");

// Get Current User
const getCurrentUserRequest = createAction("auth/GET_CURRENT_USER_R");
const getCurrentUserSuccess = createAction("auth/GET_CURRENT_USER_S");
const getCurrentUserFailure = createAction("auth/GET_CURRENT USER_F");

const authActions = {
  registerRequest,
  registerSuccess,
  registerFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
  logoutRequest,
  logoutSuccess,
  logoutFailure,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserFailure,
};

export default authActions;
