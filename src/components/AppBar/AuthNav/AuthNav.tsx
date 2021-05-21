import {
  auth_menu,
  app_bar_link,
  app_bar_link_decoration,
  button_mobile,
} from "./AuthNavStyle";
import React from "react";

// Material
import Button from "@material-ui/core/Button";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import LockOpenIcon from "@material-ui/icons/LockOpen";

// Router
import { routes } from "../../../routes/routes";
import { NavLink } from "react-router-dom";

const AuthNav: React.FC = () => {
  return (
    <div style={auth_menu}>
      <NavLink to={routes.login} style={app_bar_link}>
        <Button style={button_mobile} variant="outlined">
          <LockOpenIcon color="action" />
        </Button>
      </NavLink>
      <NavLink to={routes.register} style={app_bar_link_decoration}>
        <Button style={button_mobile} variant="outlined" color="primary">
          <PersonAddOutlinedIcon color="action" />
        </Button>
      </NavLink>
    </div>
  );
};

export default AuthNav;
