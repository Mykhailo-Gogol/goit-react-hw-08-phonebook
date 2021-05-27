import scss_styles from "./App.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// React
import { useEffect, Suspense, lazy } from "react";

// Comps
import Loader from "./components/Loader";
import AppBar from "./components/AppBar/AppBar";

// Redux
import { useSelector, useDispatch } from "react-redux";
import contactsSelectors from "./redux/contacts/contacts-selectors";
import authOperations from "./redux/auth/auth-operations";

// Router
import { routes } from "./routes/routes";
import { Switch, Route } from "react-router-dom";

// Routes
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

// Toastify
import { ToastContainer } from "react-toastify";

// Lazy
const HomePage = lazy(
  () => import("./pages/Home/Home" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(
  () =>
    import("./pages/Contacts/Contacts" /* webpackChunkName: "contacts-page" */)
);
const LoginPage = lazy(
  () => import("./pages/Login/Login" /* webpackChunkName: "login-page" */)
);
const RegisterPage = lazy(
  () =>
    import("./pages/Register/Register" /* webpackChunkName: "register-page" */)
);
const NotFoundPage = lazy(
  () => import("./pages/NotFoundPage" /* webpackChunkName: "404-page" */)
);
const UserInfoPage = lazy(
  () =>
    import("./pages/UserInfo/UserInfo" /* webpackChunkName: "userInfo-page" */)
);

const App = () => {
  const dispatch = useDispatch();
  const isLoading: boolean = useSelector(contactsSelectors.isLoadingSelector);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
    // eslint-disable-next-line
  }, []);

  return (
    <div className={scss_styles.container}>
      <div>
        <AppBar />
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <PublicRoute
              path={routes.login}
              component={LoginPage}
              redirectTo="/contacts"
              restricted
            />
            <PublicRoute
              path={routes.register}
              component={RegisterPage}
              redirectTo="/contacts"
              restricted
            />
            <PrivateRoute
              path={routes.contacts}
              component={ContactsPage}
              redirectTo="/login"
            />
            <PrivateRoute
              path={routes.userInfo}
              component={UserInfoPage}
              redirectTo="/login"
            />
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </div>

      {isLoading && <Loader />}

      {/* toast */}
      <ToastContainer />
    </div>
  );
};

export default App;
