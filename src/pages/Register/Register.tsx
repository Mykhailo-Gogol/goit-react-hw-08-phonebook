import React from "react";
import scss_styles from "./Register.module.scss";

// Comps
import RegistrationForm from "../../components/RegistrationForm";

const Register: React.FC = () => {
  return (
    <div className={scss_styles.register_page_wrapper}>
      <RegistrationForm />
    </div>
  );
};

export default Register;
