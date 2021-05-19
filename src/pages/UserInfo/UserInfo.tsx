import React from "react";

import scss_styles from "./UserInfo.module.scss";

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
    <div className={scss_styles.user_page_wrapper}>
      <h2 className={scss_styles.user_page_title}>Profile Info</h2>
      <div className={scss_styles.user_info}>
        <p>
          <AccountBoxIcon color="action" />
          {userName}
        </p>
        <p>
          <MailOutlineIcon color="action" />
          {userEmail}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
