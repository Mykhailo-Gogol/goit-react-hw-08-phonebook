import React from "react";

import scss_styles from "./Login.module.scss";

// Comps
import LoginForm from "../../components/LoginForm";

const Login: React.FC = () => {
  return (
    <div className={scss_styles.login_page_wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
