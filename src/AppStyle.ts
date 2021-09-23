import React from "react";
import image from "./images/wall.jpeg";

export const container = {
  minHeight: "100vh",
  textAlign: "center",
  margin: "0 auto",
  padding: "0 20px",
  backgroundImage: `url(${image})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
} as React.CSSProperties;

// @media (max-width: 767px) {
export const container_mobile = {
  textAlign: "center",
  margin: "0 auto",
  padding: "0 9px",
} as React.CSSProperties;
