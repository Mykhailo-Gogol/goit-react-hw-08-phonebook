import { useState } from "react";
import { form_input, contact_form, button_mobile } from "./LoginFormStyle";

// Meterial
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import LockOpenIcon from "@material-ui/icons/LockOpen";

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

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formSubmitHandler(credentials);
  };

  const reset = () => {
    setCredentials({
      email: "",
      password: "",
    });
  };

  const formSubmitHandler = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
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
        style={contact_form}
        noValidate
        autoComplete="on"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Email"
          style={form_input}
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
          style={form_input}
          inputProps={{ "aria-label": "contact password" }}
          type="password"
          onChange={handleInputChange}
          name="password"
          value={credentials.password}
          id="password"
          required
          autoComplete="on"
        />
        <Button variant="contained" type="submit" style={button_mobile}>
          <LockOpenIcon color="action" />
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default LoginForm;
