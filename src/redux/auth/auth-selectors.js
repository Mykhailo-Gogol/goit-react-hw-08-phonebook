const tokenSelector = (state) => Boolean(state.auth.token);
const userEmailSelector = (state) => state.auth.user.email;

const authSelectors = {
  tokenSelector,
  userEmailSelector,
};

export default authSelectors;
