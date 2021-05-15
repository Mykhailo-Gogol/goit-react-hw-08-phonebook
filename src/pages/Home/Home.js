import { home_page_wrapper, home_title, home_icon } from "./Home.module.scss";

// Images
import phonebookIcon from "../../images/phonebook-1.png";

// Redux
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/auth-selectors";

const Home = () => {
  const userName = useSelector(authSelectors.userNameSelector);
  return (
    <div className={home_page_wrapper}>
      {userName && <h1 className={home_title}>{`${userName}'s Phonebook`}</h1>}
      <img src={phonebookIcon} alt="home page icon" className={home_icon} />
    </div>
  );
};

export default Home;
