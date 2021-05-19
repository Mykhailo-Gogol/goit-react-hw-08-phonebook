import { user_menu, app_bar_link } from "./UserMenu.module.scss";

// Material
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";

// Redux
import { useDispatch } from "react-redux";
import authOperations from "../../../redux/auth/auth-operations";

// Styles
const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 50,
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

const UserMenu = () => {
  const styles = useStyles();

  const dispatch = useDispatch();

  return (
    <div>
      <div className={user_menu}>
        <span className={app_bar_link}>
          <Button
            className={styles.button_mobile}
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
