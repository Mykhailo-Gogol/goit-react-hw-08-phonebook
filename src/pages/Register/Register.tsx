import React from "react";
import { register_page_wrapper } from "./RegisterStyle";

// Comps
import RegistrationForm from "../../components/RegistrationForm";

const Register: React.FC = () => {
  return (
    <div style={register_page_wrapper}>
      <RegistrationForm />
    </div>
  );
};

export default Register;
