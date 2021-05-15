import { home_page_wrapper, home_title, home_icon } from "./Home.module.scss";

// Images
import phonebookIcon from "../../images/phonebook.png";

const Home = () => {
  return (
    <div className={home_page_wrapper}>
      <h1 className={home_title}>Phonebook</h1>{" "}
      <img src={phonebookIcon} alt="home page icon" className={home_icon} />
    </div>
  );
};

export default Home;
