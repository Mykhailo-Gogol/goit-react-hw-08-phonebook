import { app_bar_link, user_menu, user_email } from "./UserMenu.module.scss";

// MATERIAL
import Button from "@material-ui/core/Button";

// ROUTER
import routes from "../../../routes";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

// REDUX
import { useDispatch } from "react-redux";
import authSelectors from "../../../redux/auth/auth-selectors";
import authOperations from "../../../redux/auth/auth-operations";

const UserMenu = () => {
  const userEmail = useSelector(authSelectors.userEmailSelector);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={user_menu}>
        <NavLink to={routes.contacts} className={app_bar_link}>
          <Button variant="contained">Contacts</Button>
        </NavLink>
        <div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => dispatch(authOperations.logout())}
          >
            Log Out
          </Button>
        </div>
      </div>
      <p className={user_email}>{userEmail}</p>
    </div>
  );
};

export default UserMenu;
