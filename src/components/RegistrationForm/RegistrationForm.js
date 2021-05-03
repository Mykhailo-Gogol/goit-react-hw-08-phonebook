// import shortid from "shortid";
import { useState } from "react";
import { form_input, contact_form } from "./RegistrationForm.module.scss";

// Meterial
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

// Toastyfy
import { ToastContainer } from "react-toastify";
import {
  nameInputValidation,
  emailInputValidation,
  passwordInputValidation,
} from "../../utils/notifications";

// Redux
// eslint-disable-next-line
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({
    name: "",
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
    reset();
  };

  const reset = () => {
    setCredentials({
      name: "",
      email: "",
      password: "",
    });
  };

  const formSubmitHandler = ({ name, email, password }) => {
    const testName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
      name
    );

    const testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const testPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
      password
    );

    if (testName !== true) {
      nameInputValidation();
    } else if (testEmail !== true) {
      emailInputValidation();
    } else if (testPassword !== true) {
      passwordInputValidation();
    } else {
      dispatch(authOperations.register({ name, email, password }));
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
          placeholder="Name"
          className={form_input}
          inputProps={{ "aria-label": "contact name" }}
          type="text"
          onChange={handleInputChange}
          name="name"
          value={credentials.name}
          id="name"
          required
          autoComplete="on"
        />
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
          Register
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default RegistrationForm;
