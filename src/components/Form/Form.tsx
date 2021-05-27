import React, { useState } from "react";
import { form_input, contact_form, button_mobile } from "./FormStyle";

// Meterial
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";

// Toastify
import {
  nameInputValidation,
  numberInputValidation,
  contactDuplicateValidation,
} from "../../utils/error-notifications/error-notifications";

// Redux
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

type TFormProps = {
  onClose: (onClose: boolean) => void;
};

const Form: React.FC<TFormProps> = ({
  onClose,
}: {
  onClose: (onClose: boolean) => void;
}) => {
  const contacts = useSelector(contactsSelectors.contactsReselect);
  const dispatch = useDispatch();

  const [contact, setContact] = useState({
    name: "",
    number: "+380",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setContact({
      ...contact,
      [name]: value.charAt(0).toUpperCase() + value.slice(1),
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formSubmitHandler(contact);
    onClose && onClose(false);
  };

  const reset = () => {
    setContact({
      name: "",
      number: "+380",
    });
  };

  const formSubmitHandler = ({
    name,
    number,
  }: {
    name: string;
    number: string;
  }) => {
    const testName =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(name);

    const testNumber =
      /(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})/.test(
        number
      );

    if (
      contacts.some(
        (contact: { name: string; number: string }) => contact.name === name
      )
    ) {
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
        style={contact_form}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Input
          placeholder="Name"
          style={form_input}
          inputProps={{ "aria-label": "contact name" }}
          type="text"
          onChange={handleInputChange}
          name="name"
          value={contact.name}
          id="name"
          required
          // variant="outlined"
        />
        <Input
          placeholder="Number"
          style={form_input}
          inputProps={{ "aria-label": "contact number" }}
          type="tel"
          onChange={handleInputChange}
          name="number"
          value={contact.number}
          id="number"
          required
        />
        <Button variant="outlined" type="submit" style={button_mobile}>
          <AddIcon color="action" />
        </Button>
      </form>
    </>
  );
};

export default Form;
