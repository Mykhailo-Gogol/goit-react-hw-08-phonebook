import { container } from "./App.module.scss";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// React
import { Suspense, lazy } from "react";

// COMP
import Loader from "./components/Loader";
import AppBar from "./components/AppBar/";

// REDUX
import { useSelector } from "react-redux";
import phonebookSelectors from "./redux/phonebook/phonebook-selectors";

// ROUTER
import routes from "./routes";
import { Switch, Route } from "react-router-dom";

// Lazy
const HomePage = lazy(() =>
  import("./pages/Home/Home" /* webpackChunkName: "home-page" */)
);
const PhonebookPage = lazy(() =>
  import("./pages/Phonebook/Phonebook" /* webpackChunkName: "phonebook-page" */)
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
  const isLoading = useSelector(phonebookSelectors.isLoadingSelector);
  return (
    <div className={container}>
      <>
        <AppBar />
      </>
      <>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route exact path={routes.home} component={HomePage} />
            <Route path={routes.login} component={LoginPage} />
            <Route path={routes.register} component={RegisterPage} />
            <Route path={routes.phonebook} component={PhonebookPage} />

            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </>

      {/* Spinner */}
      {isLoading && <Loader />}
    </div>
  );
};

export default App;
