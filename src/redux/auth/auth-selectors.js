// const tokenSelector = (state) => Boolean(state.auth.token);
const userEmailSelector = (state) => state.auth.user.email;
const isAuthenticatedSelector = (state) => state.auth.isAuthenticated;

const authSelectors = {
  // tokenSelector,
  userEmailSelector,
  isAuthenticatedSelector,
};

export default authSelectors;
