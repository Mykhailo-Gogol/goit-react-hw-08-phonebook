import React from "react";

export const home_title = {
  textAlign: "center",
  color: "white",
} as React.CSSProperties;

export const home_icon = {
  display: "block",
  width: "200px",
  height: "auto",
  transition: "250ms",
  "&:hover": {
    transform: "scale(1.1)",
    transition: "250ms",
  },
} as React.CSSProperties;

export const home_page_wrapper = {
  width: "100%",
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
} as React.CSSProperties;

export const user_name = {
  color: "white",
};
