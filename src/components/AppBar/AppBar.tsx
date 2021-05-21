import React, { useState } from "react";

import {
  app_bar_nav,
  app_bar_link_decoration,
  main_nav,
  left_user_menu,
  button_mobile,
  user_button_mobile,
} from "./AppBarStyle";

// Router
import { routes } from "../../routes/routes";
import { NavLink } from "react-router-dom";

// Redux
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

// Material
import Button from "@material-ui/core/Button";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import MenuBookOutlinedIcon from "@material-ui/icons/MenuBookOutlined";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
// Modal
import ControlPointSharpIcon from "@material-ui/icons/ControlPointSharp";

// Comps
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";
import Modal from "../Modal";

const AppBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const userEmail = useSelector(authSelectors.userEmailSelector);
  const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);
  return (
    <header>
      <nav style={app_bar_nav}>
        <div style={main_nav}>
          <NavLink exact to={routes.home} style={app_bar_link_decoration}>
            <Button style={button_mobile} variant="outlined">
              <HomeOutlinedIcon color="action" />
            </Button>
          </NavLink>

          {/* Modal */}
          <Modal open={isOpen} onClose={setIsOpen} />

          {isAuthenticated ? (
            <div style={left_user_menu}>
              <NavLink to={routes.contacts} style={app_bar_link_decoration}>
                <Button
                  style={button_mobile}
                  variant="outlined"
                  color="primary"
                >
                  <MenuBookOutlinedIcon color="action" />
                </Button>
              </NavLink>
              <Button
                variant="outlined"
                style={button_mobile}
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
      </nav>

      {/* User */}
      {isAuthenticated && (
        <div>
          <NavLink to={routes.userInfo} style={app_bar_link_decoration}>
            <Button style={user_button_mobile} variant="outlined">
              <AccountBoxIcon color="action" />
              <span>{userEmail}</span>
            </Button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default AppBar;
