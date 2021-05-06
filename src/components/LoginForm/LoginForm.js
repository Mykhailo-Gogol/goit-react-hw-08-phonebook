import { useState } from "react";
import { form_input, contact_form } from "./LoginForm.module.scss";

// Meterial
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

// Toastify
import { ToastContainer } from "react-toastify";
import {
  emailInputValidation,
  passwordInputValidation,
} from "../../utils/error-notifications/error-notifications";

// Redux
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

const LoginForm = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmitHandler(credentials);
  };

  const reset = () => {
    setCredentials({
      email: "",
      password: "",
    });
  };

  const formSubmitHandler = ({ email, password }) => {
    const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const testPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
      password
    );

    if (testEmail !== true) {
      emailInputValidation();
    } else if (testPassword !== true) {
      passwordInputValidation();
    } else {
      dispatch(authOperations.login({ email, password }));
      reset();
    }
  };

  return (
    <>
      <form
        className={contact_form}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          className={form_input}
          inputProps={{ "aria-label": "contact email" }}
          type="email"
          onChange={handleInputChange}
          name="email"
          value={credentials.email}
          id="email"
          required
          autoComplete="on"
        />
        <Input
          placeholder="Password"
          className={form_input}
          inputProps={{ "aria-label": "contact password" }}
          type="password"
          onChange={handleInputChange}
          name="password"
          value={credentials.password}
          id="password"
          required
          autoComplete="on"
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
