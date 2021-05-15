import {
  title_404,
  image_404,
  notfound_page_wrapper,
} from "./NotFoundPage.module.scss";

// Images
import PNFImage from "../../images/404.svg";

const NotFoundPage = () => {
  return (
    <div className={notfound_page_wrapper}>
      <h1 className={title_404}>Page is Not found !</h1>
      <img src={PNFImage} alt="Page is Not found" className={image_404} />
    </div>
  );
};

export default NotFoundPage;
