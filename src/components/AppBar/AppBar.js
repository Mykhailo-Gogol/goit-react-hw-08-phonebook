import { nav, nav_link, nav_link_active } from "./AppBar.module.scss";

// ROUTER
import routes from "../../routes";
import { NavLink } from "react-router-dom";

function AppBar() {
  return (
    <header>
      <nav className={nav}>
        <div>
          <NavLink
            to={routes.home}
            className={nav_link}
            activeClassName={nav_link_active}
          >
            Home
          </NavLink>
          <NavLink
            to={routes.contacts}
            className={nav_link}
            activeClassName={nav_link_active}
          >
            Contacts
          </NavLink>
        </div>
        <div>
          <NavLink
            to={routes.login}
            className={nav_link}
            activeClassName={nav_link_active}
          >
            Login
          </NavLink>
          <NavLink
            to={routes.register}
            className={nav_link}
            activeClassName={nav_link_active}
          >
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default AppBar;
