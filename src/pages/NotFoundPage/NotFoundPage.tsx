import React from "react";

import scss_styles from "./NotFoundPage.module.scss";

// Images
import PNFImage from "../../images/404.svg";

const NotFoundPage: React.FC = () => {
  return (
    <div className={scss_styles.notfound_page_wrapper}>
      <h1 className={scss_styles.title_404}>Page is Not found !</h1>
      <img
        src={PNFImage}
        alt="Page is Not found"
        className={scss_styles.image_404}
      />
    </div>
  );
};

export default NotFoundPage;
