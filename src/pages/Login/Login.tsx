import React from "react";

import { login_page_wrapper } from "./LoginStyle";

// Comps
import LoginForm from "../../components/LoginForm";

const Login: React.FC = () => {
  return (
    <div style={login_page_wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
