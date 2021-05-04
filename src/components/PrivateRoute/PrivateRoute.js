// ROUTER
import { Route, Redirect } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const PrivateRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = useSelector(authSelectors.tokenSelector);

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
