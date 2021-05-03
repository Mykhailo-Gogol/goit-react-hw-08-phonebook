import { container } from "./App.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// React
import { useEffect, Suspense, lazy } from "react";

// COMP
import Loader from "./components/Loader";
import AppBar from "./components/AppBar/";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import contactsSelectors from "./redux/contacts/contacts-selectors";
import authOperations from "./redux/auth/auth-operations";

// ROUTER
import routes from "./routes";
import { Switch, Route } from "react-router-dom";

// Lazy
const HomePage = lazy(() =>
  import("./pages/Home/Home" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("./pages/Contacts/Contacts" /* webpackChunkName: "contacts-page" */)
);
const LoginPage = lazy(() =>
  import("./pages/Login/Login" /* webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(() =>
  import("./pages/Register/Register" /* webpackChunkName: "register-page" */)
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage" /* webpackChunkName: "404-page" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(contactsSelectors.isLoadingSelector);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={container}>
      <div>
        <AppBar />
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.register} component={RegisterPage} />
            <Route path={routes.contacts} component={ContactsPage} />

            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>

      {/* Spinner */}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
