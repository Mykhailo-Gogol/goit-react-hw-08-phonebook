import axios from "axios";
import authActions from "./auth-actions";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const register = (credentials) => async (dispatch) => {
  dispatch(authActions.registerRequest());

  try {
    const response = await axios.post("/users/signup", credentials);
    dispatch(authActions.registerSuccess(response.data));
  } catch (error) {
    dispatch(authActions.registerFailure(error));
  }
};

const login = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest());

  try {
    const response = await axios.post("/users/login", credentials);
    dispatch(authActions.loginSuccess(response.data));
  } catch (error) {
    dispatch(authActions.loginFailure(error));
  }
};

const logout = (token) => async (dispatch) => {
  dispatch(authActions.logoutRequest());

  dispatch(authActions.logoutRequest());

  try {
    const response = await axios.post("/users/logout", token);
    dispatch(authActions.logoutSuccess(response.data));
  } catch (error) {
    dispatch(authActions.logoutFailure(error));
  }
};

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
