// Router
import { Route, Redirect } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const PrivateRoute = ({ component: Component, ...props }: any) => {
  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);

  return (
    <Route
      render={() => {
        return isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={props.redirectTo} />
        );
      }}
    />
  );
};

export default PrivateRoute;
