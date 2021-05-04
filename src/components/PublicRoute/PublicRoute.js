// ROUTER
import { Route, Redirect } from "react-router-dom";

// REDUX
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const PublicRoute = ({ component: Component, ...props }) => {
  const isAuthenticated = useSelector(authSelectors.tokenSelector);

  return (
    <Route
      render={() => {
        return isAuthenticated && props.restricted ? (
          <Redirect to={props.redirectTo} />
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;
