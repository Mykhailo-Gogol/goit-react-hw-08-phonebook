import {
  app_bar_link,
  auth_menu,
  app_bar_link_decoration,
} from "./AuthNav.module.scss";

// Material
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import LockOpenIcon from "@material-ui/icons/LockOpen";

// Router
import routes from "../../../routes";
import { NavLink } from "react-router-dom";

// Styles
const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    fontSize: 12,
    background: "#F4FAFF",
    "&:hover": {
      background: "#F4FAFF",
    },
    "&:active": {
      background: "#F4FAFF",
    },
  },
});

const AuthNav = () => {
  const styles = useStyles();

  return (
    <div className={auth_menu}>
      <NavLink to={routes.login} className={app_bar_link}>
        <Button className={styles.button_mobile} variant="outlined">
          <LockOpenIcon color="action" />
        </Button>
      </NavLink>
      <NavLink to={routes.register} className={app_bar_link_decoration}>
        <Button
          className={styles.button_mobile}
          variant="outlined"
          color="primary"
        >
          <PersonAddOutlinedIcon color="action" />
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
