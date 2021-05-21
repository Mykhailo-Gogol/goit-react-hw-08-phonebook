import scss_styles from "./Home.module.scss";

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
  const userName = useSelector(authSelectors.userNameSelector);
  return (
    <div className={scss_styles.home_page_wrapper}>
      {userName && (
        <h1 className={scss_styles.home_title}>
          <span className={scss_styles.user_name}>{`${userName}'s`}</span>
          Phonebook
        </h1>
      )}
      <Link to={routes.contacts}>
        <img
          src={phonebookIcon}
          alt="home page icon"
          className={scss_styles.home_icon}
        />
      </Link>
    </div>
  );
};

export default Home;
