import React from "react";

import { useMedia } from "react-use";

import {
  title_404,
  image_404,
  image_404_mobile,
  notfound_page_wrapper,
} from "./NotFoundPageStyle";

// Images
import PNFImage from "../../images/404.svg";

const NotFoundPage: React.FC = () => {
  const isWide = useMedia("(max-width: 767px)");

  return (
    <div style={notfound_page_wrapper}>
      <h1 style={title_404}>Page is Not found !</h1>
      <img
        src={PNFImage}
        alt="Page is Not found"
        style={isWide ? image_404_mobile : image_404}
      />
    </div>
  );
};

export default NotFoundPage;
