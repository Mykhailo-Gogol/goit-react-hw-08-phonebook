import React from "react";

export const contact_list = {
  maxWidth: "100%",
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 0,
  paddingRight: 0,
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  listStyle: "none",
} as React.CSSProperties;

export const contact_item = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  width: "calc(100% / 3 - 40px)",
  border: "2px solid #7cc6fe",
  borderRadius: 5,
  backgroundColor: "#fff",
  margin: "10px 15px",
};

// export const contact_item:nth-child(3n) {
//   margin-right: 0px;
// }

export const contact_text = {
  width: 200,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  margin: 0,
  height: 50,
  color: "#212121",
  paddingLeft: 20,
};

export const no_contacts = {
  color: "#fff",
};

export const button_mobile = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  fontSize: 12,
  background: "#F4FAFF",
  "&:hover": {
    background: "#758BFD",
  },
  "&:active": {
    background: "#758BFD",
  },
};

// @media (max-width: 767px) {
export const contact_list_mobile = {
  flexDirection: "column",
  flexWrap: "nowrap",
  width: 300,
  height: 300,
  paddingLeft: 0,
  margin: "0 auto",
  overflowY: "scroll",
} as React.CSSProperties;

export const contact_item_mobile = {
  width: 300,
  height: "auto",
  padding: 0,
  marginBottom: 2,
  margin: "10px auto",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-around",
  border: "2px solid #7cc6fe",
  borderRadius: 5,
  backgroundColor: "#fff",
};

// export const contact_item:nth-child(3n) {
//   margin-left: auto;
//   margin-right: auto;
// }

export const contact_text_mobile = {
  width: 200,
  flexWrap: "wrap",
  justifyContent: "space-between",
  display: "flex",
  alignItems: "center",
  margin: 0,
  height: 50,
  color: "#212121",
  paddingLeft: 20,
} as React.CSSProperties;
