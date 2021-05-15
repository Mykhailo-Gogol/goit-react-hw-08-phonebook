const userEmailSelector = (state) => state.auth.user.email;
const userNameSelector = (state) => state.auth.user.name;

const isAuthenticatedSelector = (state) => state.auth.isAuthenticated;

const authSelectors = {
  userEmailSelector,
  userNameSelector,
  isAuthenticatedSelector,
};

export default authSelectors;
