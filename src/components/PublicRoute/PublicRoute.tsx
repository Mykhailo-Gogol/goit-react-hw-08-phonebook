// Router
import { Route, Redirect } from "react-router-dom";

// Redux
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const PublicRoute = ({ component: Component, ...props }: any) => {
  const isAuthenticated: boolean = useSelector(
    authSelectors.isAuthenticatedSelector
  );

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
