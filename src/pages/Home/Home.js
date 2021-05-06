import { home_title, home_image } from "./Home.module.scss";

// Images
import HomeImage from "../../images/home.svg";

const Home = () => {
  return (
    <div>
      <h1 className={home_title}>Home page</h1>
      <img src={HomeImage} alt="Home page" className={home_image} />
    </div>
  );
};

export default Home;
