import {
  home_page_wrapper,
  home_title,
  home_icon,
  user_name,
} from "./Home.module.scss";

// Router
import { Link } from "react-router-dom";
import routes from "../../routes/index";

// Images
import phonebookIcon from "../../images/phonebook-1.png";

// Redux
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const Home = () => {
  const userName = useSelector(authSelectors.userNameSelector);
  return (
    <div className={home_page_wrapper}>
      {userName && (
        <h1 className={home_title}>
          <span className={user_name}>{`${userName}'s`}</span> Phonebook
        </h1>
      )}
      <Link to={routes.contacts}>
        <img src={phonebookIcon} alt="home page icon" className={home_icon} />
      </Link>
    </div>
  );
};

export default Home;
