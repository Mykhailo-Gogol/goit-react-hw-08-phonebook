const userEmailSelector = (state) => state.auth.user.email;
const isAuthenticatedSelector = (state) => state.auth.isAuthenticated;

const authSelectors = {
  userEmailSelector,
  isAuthenticatedSelector,
};

export default authSelectors;
