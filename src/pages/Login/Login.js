import { login_page_wrapper } from "./Login.module.scss";

// Comps
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className={login_page_wrapper}>
      <LoginForm />
    </div>
  );
};

export default Login;
