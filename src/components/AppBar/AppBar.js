import {
  app_bar_nav,
  app_bar_link,
  app_bar_link_decoration,
  main_nav,
} from "./AppBar.module.scss";

// Router
import routes from "../../routes";
import { NavLink } from "react-router-dom";

// Redux
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

// Material
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

// Comps
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    fontSize: 12,
    background: "#F4FAFF",
    "&:hover": {
      background: "#7CC6FE",
    },
    "&:active": {
      background: "#758BFD",
    },
  },
  user_button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    fontSize: 12,
    marginLeft: "auto",
    marginRight: "auto",
    background: "#F4FAFF",
    "&:hover": {
      background: "#7CC6FE",
    },
    "&:active": {
      background: "#758BFD",
    },
  },
});

function AppBar() {
  const styles = useStyles();
  const userEmail = useSelector(authSelectors.userEmailSelector);
  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);
  return (
    <header>
      <nav className={app_bar_nav}>
        <div className={main_nav}>
          <NavLink exact to={routes.home} className={app_bar_link_decoration}>
            <Button
              className={styles.button_mobile}
              variant="outlined"
              // color="primary"
            >
              <HomeOutlinedIcon color="action" />
            </Button>
          </NavLink>
          {isAuthenticated ? (
            <NavLink to={routes.contacts} className={app_bar_link}>
              <Button
                className={styles.button_mobile}
                variant="outlined"
                color="primary"
              >
                <MenuBookOutlinedIcon color="action" />
              </Button>
            </NavLink>
          ) : null}
        </div>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
        {/* User */}
      </nav>

      {isAuthenticated && (
        <div>
          <Button
            className={`${styles.user_button_mobile} ${styles.icon_margin}`}
            variant="outlined"
          >
            <AccountBoxIcon color="action" />
            <span>{userEmail}</span>
          </Button>
        </div>
      )}
    </header>
  );
}

export default AppBar;
