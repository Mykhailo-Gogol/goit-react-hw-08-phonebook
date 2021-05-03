import axios from "axios";
import authActions from "./auth-actions";

import {
  loginSuccess,
  registrationSuccess,
  logoutSuccess,
} from "../../utils/success-notifications/success-notifications";

import {
  loginError,
  registrationError,
  logoutError,
} from "../../utils/error-notifications/error-notifications";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

// REGISTER
const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);
    token.set(response.data.token);
    dispatch(authActions.registerSuccess(response.data));

    registrationSuccess();
  } catch (error) {
    dispatch(authActions.registerFailure(error));

    registrationError();
  }
};

// LOGIN
const login = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);
    token.set(response.data.token);
    dispatch(authActions.loginSuccess(response.data));

    loginSuccess();
  } catch (error) {
    dispatch(authActions.loginFailure(error));

    loginError();
  }
};

// LOGOUT
const logout = () => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  try {
    await axios.post("/users/logout");
    token.unset();
    dispatch(authActions.logoutSuccess());

    logoutSuccess();
  } catch (error) {
    dispatch(authActions.logoutFailure(error));

    logoutError();
  }
};

// Get Current User
const getCurrentUser = (token) => async (dispatch) => {
  dispatch(authActions.getCurrentUserRequest());

  try {
    const response = await axios.get("/users/current", token);
    dispatch(authActions.getCurrentUserSuccess(response.data));
  } catch (error) {
    dispatch(authActions.getCurrentUserFailure(error));
  }
};

const authOperations = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default authOperations;
