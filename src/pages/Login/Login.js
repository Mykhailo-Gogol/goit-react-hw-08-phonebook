import { login_page_wrapper } from "./Login.module.scss";

import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className={login_page_wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
