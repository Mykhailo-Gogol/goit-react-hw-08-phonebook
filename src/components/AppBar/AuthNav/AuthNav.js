import { app_bar_link } from "./AuthNav.module.scss";

// MATERIAL
import Button from "@material-ui/core/Button";

// ROUTER
import routes from "../../../routes";
import { NavLink } from "react-router-dom";

const AuthNav = () => {
  return (
    <div>
      <NavLink to={routes.login} className={app_bar_link}>
        <Button variant="contained">Login</Button>
      </NavLink>
      <NavLink to={routes.register} className={app_bar_link}>
        <Button variant="contained" color="primary">
          Register
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
