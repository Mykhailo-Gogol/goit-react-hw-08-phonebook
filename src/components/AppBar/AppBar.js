import { app_bar_nav } from "./AppBar.module.scss";

// ROUTER
import routes from "../../routes";
import { NavLink } from "react-router-dom";

// REDUX
import authSelectors from "../../redux/auth/auth-selectors";
import { useSelector } from "react-redux";

// MATERIAL
import Button from "@material-ui/core/Button";

// COMP
import AuthNav from "./AuthNav";
import UserMenu from "./UserMenu";

function AppBar() {
  const token = useSelector(authSelectors.tokenSelector);
  return (
    <header>
      <nav className={app_bar_nav}>
        <div>
          <NavLink exact to={routes.home}>
            <Button variant="contained" color="primary">
              Home
            </Button>
          </NavLink>
        </div>
        {token ? <UserMenu /> : <AuthNav />}
      </nav>
    </header>
  );
}

export default AppBar;
