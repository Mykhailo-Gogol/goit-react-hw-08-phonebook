import {
  app_bar_link,
  auth_menu,
  app_bar_link_decoration,
} from "./AuthNav.module.scss";

// MATERIAL
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

// ROUTER
import routes from "../../../routes";
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    fontSize: 12,
  },
});

const AuthNav = () => {
  const styles = useStyles();

  return (
    <div className={auth_menu}>
      <NavLink to={routes.login} className={app_bar_link}>
        <Button className={styles.button_mobile} variant="outlined">
          Login
        </Button>
      </NavLink>
      <NavLink to={routes.register} className={app_bar_link_decoration}>
        <Button
          className={styles.button_mobile}
          variant="outlined"
          color="primary"
        >
          Register
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
