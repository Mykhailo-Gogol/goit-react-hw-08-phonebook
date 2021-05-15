import { register_page_wrapper } from "./Register.module.scss";

import RegistrationForm from "../../components/RegistrationForm/";

const Register = () => {
  return (
    <div className={register_page_wrapper}>
      <RegistrationForm />
    </div>
  );
};

export default Register;
