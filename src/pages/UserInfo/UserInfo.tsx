import React from "react";

import {
  user_page_wrapper,
  user_info,
  user_info_p,
  user_page_title,
} from "./UserInfoStyle";

// Redux
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

// Material
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MailOutlineIcon from "@material-ui/icons/MailOutline";

const UserInfo: React.FC = () => {
  const userName: string = useSelector(authSelectors.userNameSelector);
  const userEmail: string = useSelector(authSelectors.userEmailSelector);

  return (
    <div style={user_page_wrapper}>
      <h2 style={user_page_title}>Profile Info</h2>
      <div style={user_info}>
        <p style={user_info_p}>
          <AccountBoxIcon color="action" />
          {userName}
        </p>
        <p style={user_info_p}>
          <MailOutlineIcon color="action" />
          {userEmail}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
