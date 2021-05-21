export const app_bar_nav = {
  display: "flex",
  justifyContent: "space-between",
  padding: "20px 0",
};

export const main_nav = {
  display: "flex",
  alignItems: "center",
};

export const app_bar_link_decoration = {
  textDecoration: "none",
  marginRight: 20,
};

export const left_user_menu = {
  display: "flex",
};

export const button_mobile = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 50,
  fontSize: 12,

  background: "#F4FAFF",
  transition: "200ms",

  "&:hover": {
    background: "#F4FAFF",
    transform: "scale(1.1)",
    transition: "200ms",
  },

  "&:active": {
    background: "#F4FAFF",
  },
};
export const user_button_mobile = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 300,
  fontSize: 12,
  marginLeft: "auto",
  marginRight: "auto",
  background: "#F4FAFF",
  "&:hover": {
    background: "#F4FAFF",
  },
  "&:active": {
    background: "#F4FAFF",
  },
};

// @media (max-width: 767px) {
// export const mobile_app_bar_nav = {
//   alignItems: "center",
//   justifyContent: "space-between",
// };

// export const mobile_main_nav = {
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
// };
