import {
  home_title,
  home_icon,
  home_page_wrapper,
  user_name,
} from "./HomeStyle";

import React from "react";

// Router
import { Link } from "react-router-dom";
import { routes } from "../../routes/routes";

// Images
import phonebookIcon from "../../images/phonebook-1.png";

// Redux
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const Home: React.FC = () => {
  const userName: string = useSelector(authSelectors.userNameSelector);
  return (
    <div style={home_page_wrapper}>
      {userName && (
        <h1 style={home_title}>
          <span style={user_name}>{`${userName}'s`}</span>
          Phonebook
        </h1>
      )}
      <Link to={routes.contacts}>
        <img src={phonebookIcon} alt="home page icon" style={home_icon} />
      </Link>
    </div>
  );
};

export default Home;
