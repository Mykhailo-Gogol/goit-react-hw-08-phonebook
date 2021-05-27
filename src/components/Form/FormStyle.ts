import React from "react";

export const contact_form = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: 300,
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: 40,
  marginBottom: 80,
} as React.CSSProperties;

export const form_input = {
  backgroundColor: "#fff",
  padding: "0 10px",
  marginBottom: 15,
  borderRadius: "5px 5px 0 0",
  fontFamily: '"Montserrat", sans-serif',
  "&::placeholder": {
    fontFamily: '"Montserrat", sans-serif',
  },
};

export const button_mobile = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 300,
  fontSize: 12,
  background: "#758BFD",
  "&:hover": {
    background: "#758BFD",
  },
  "&:active": {
    background: "#758BFD",
  },
};
