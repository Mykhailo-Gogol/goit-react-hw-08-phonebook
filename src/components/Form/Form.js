import { useState } from "react";
import { form_input, contact_form } from "./Form.module.scss";

// Meterial
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";

// Toastify
import { ToastContainer } from "react-toastify";
import {
  nameInputValidation,
  numberInputValidation,
  contactDuplicateValidation,
} from "../../utils/error-notifications/error-notifications";

// Redux
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

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

const Form = () => {
  const styles = useStyles();
  const contacts = useSelector(contactsSelectors.contactsReselect);
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: "",
    number: "+380",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setContact({
      ...contact,
      [name]: value.charAt(0).toUpperCase() + value.slice(1),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formSubmitHandler(contact);
  };

  const reset = () => {
    setContact({
      name: "",
      number: "+380",
    });
  };

  const formSubmitHandler = ({ name, number }) => {
    const testName =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);

    const testNumber =
      /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/.test(
        number
      );

    if (contacts.some((contact) => contact.name === name)) {
      contactDuplicateValidation(name);
    } else if (testName !== true) {
      nameInputValidation();
    } else if (testNumber !== true) {
      numberInputValidation();
    } else {
      dispatch(contactsOperations.addContactOperation({ name, number }));
      reset();
    }
  };

  return (
    <>
      <form
        className={contact_form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Name"
          className={form_input}
          inputProps={{ "aria-label": "contact name" }}
          type="text"
          onChange={handleInputChange}
          name="name"
          value={contact.name}
          id="name"
          required
          variant="outlined"
        />
        <Input
          placeholder="Number"
          className={form_input}
          inputProps={{ "aria-label": "contact number" }}
          type="tel"
          onChange={handleInputChange}
          name="number"
          value={contact.number}
          id="number"
          required
        />
        <Button
          variant="outlined"
          type="submit"
          className={styles.button_mobile}
        >
          <AddIcon color="action" />
        </Button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
