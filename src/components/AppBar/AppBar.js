import {
  app_bar_nav,
  app_bar_link,
  app_bar_link_decoration,
  main_nav,
} from "./AppBar.module.scss";

// ROUTER
import routes from "../../routes";
import { NavLink } from "react-router-dom";

// REDUX
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

// MATERIAL
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// COMP
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    fontSize: 12,
  },
});

function AppBar() {
  const styles = useStyles();
  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);
  return (
    <header>
      <nav className={app_bar_nav}>
        <div className={main_nav}>
          <NavLink exact to={routes.home} className={app_bar_link_decoration}>
            <Button
              className={styles.button_mobile}
              variant="outlined"
              color="primary"
            >
              Home
            </Button>
          </NavLink>
          {isAuthenticated ? (
            <NavLink to={routes.contacts} className={app_bar_link}>
              <Button
                className={styles.button_mobile}
                variant="outlined"
                color="secondary"
              >
                Contacts
              </Button>
            </NavLink>
          ) : null}
        </div>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
}

export default AppBar;
