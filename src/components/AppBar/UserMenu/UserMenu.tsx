import React from "react";
import { user_menu, app_bar_link, button_mobile } from "./UserMenuStyle";

// Material
import Button from "@material-ui/core/Button";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

// Redux
import { useDispatch } from "react-redux";
import authOperations from "../../../redux/auth/auth-operations";

const UserMenu: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <div style={user_menu}>
        <span style={app_bar_link}>
          <Button
            style={button_mobile}
            variant="outlined"
            onClick={() => dispatch(authOperations.logout())}
          >
            <ExitToAppOutlinedIcon color="action" />
          </Button>
        </span>
      </div>
    </div>
  );
};

export default UserMenu;
