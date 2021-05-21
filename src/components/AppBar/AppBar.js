import { useState } from "react";

import {
  app_bar_nav,
  app_bar_link,
  app_bar_link_decoration,
  main_nav,
  left_user_menu,
} from "./AppBar.module.scss";

// Router
import { routes } from "../../routes/routes";
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
// Modal
import ControlPointSharpIcon from "@material-ui/icons/ControlPointSharp";

// Comps
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";
import Modal from "../Modal";

const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    fontSize: 12,
    marginRight: 20,
    background: "#F4FAFF",
    transition: "200ms",

    "&:hover": {
      background: "#F4FAFF",
      transform: "scale(1.1)",
      transition: "200ms",
    },

    "&:active": {
      background: "#F4FAFF",
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
      background: "#F4FAFF",
    },
    "&:active": {
      background: "#F4FAFF",
    },
  },
});

function AppBar() {
  const styles = useStyles();
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Modal */}
          <Modal open={isOpen} onClose={setIsOpen} />

          {isAuthenticated ? (
            <div className={left_user_menu}>
              <NavLink to={routes.contacts} className={app_bar_link}>
                <Button
                  className={styles.button_mobile}
                  variant="outlined"
                  color="primary"
                >
                  <MenuBookOutlinedIcon color="action" />
                </Button>
              </NavLink>
              <Button
                variant="outlined"
                className={styles.button_mobile}
                onClick={() => {
                  setIsOpen(true);
                }}
              >
                <ControlPointSharpIcon color="action" />
              </Button>
            </div>
          ) : null}
        </div>
        {isAuthenticated ? <UserMenu /> : <AuthNav />}
        {/* User */}
      </nav>

      {isAuthenticated && (
        <div>
          <NavLink to={routes.userInfo} className={app_bar_link}>
            <Button
              className={`${styles.user_button_mobile} ${styles.icon_margin}`}
              variant="outlined"
            >
              <AccountBoxIcon color="action" />
              <span>{userEmail}</span>
            </Button>
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default AppBar;
