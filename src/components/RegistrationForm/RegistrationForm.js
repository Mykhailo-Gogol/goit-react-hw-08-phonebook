import { useState } from "react";
import { form_input, contact_form } from "./RegistrationForm.module.scss";

// Meterial
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";

// Toastify
import { ToastContainer } from "react-toastify";
import {
  nameInputValidation,
  emailInputValidation,
  passwordInputValidation,
} from "../../utils/error-notifications/error-notifications";

// Redux
import { useDispatch } from "react-redux";
import authOperations from "../../redux/auth/auth-operations";

// Styles
const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    fontSize: 12,
    background: "#F4FAFF",
    "&:hover": {
      background: "#7CC6FE",
    },
    "&:active": {
      background: "#758BFD",
    },
  },
});

const RegistrationForm = () => {
  const styles = useStyles();
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
  };

  const reset = () => {
    setCredentials({
      name: "",
      email: "",
      password: "",
    });
  };

  const formSubmitHandler = ({ name, email, password }) => {
    const testName =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);

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
        <Button
          variant="contained"
          type="submit"
          className={styles.button_mobile}
        >
          <PersonAddOutlinedIcon color="action" />
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default RegistrationForm;
