import { user_menu, app_bar_link } from "./UserMenu.module.scss";

// MATERIAL
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector } from "react-redux";

// REDUX
import { useDispatch } from "react-redux";
import authSelectors from "../../../redux/auth/auth-selectors";
import authOperations from "../../../redux/auth/auth-operations";

const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 105,
    fontSize: 12,
  },
});

const UserMenu = () => {
  const styles = useStyles();

  const userEmail = useSelector(authSelectors.userEmailSelector);
  const dispatch = useDispatch();

  return (
    <div className={user_menu}>
      <span className={app_bar_link}>
        <Button
          className={styles.button_mobile}
          variant="outlined"
          color="secondary"
          onClick={() => dispatch(authOperations.logout())}
        >
          Log Out
        </Button>
      </span>

      <Button className={styles.button_mobile} variant="outlined">
        {userEmail}
      </Button>
    </div>
  );
};

export default UserMenu;
