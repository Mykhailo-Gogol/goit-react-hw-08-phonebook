import { useEffect } from "react";

import {
  contact_item,
  contact_text,
  button_group,
  contact_list,
  no_contacts,
} from "./ContactList.module.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// Material
import Button from "@material-ui/core/Button";
import BackspaceTwoToneIcon from "@material-ui/icons/BackspaceTwoTone";
import { makeStyles } from "@material-ui/core/styles";

// Styles
const useStyles = makeStyles({
  button_mobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    fontSize: 12,
    background: "#F4FAFF",
    "&:hover": {
      background: "#758BFD",
    },
    "&:active": {
      background: "#758BFD",
    },
  },
});

const ContactList = () => {
  const styles = useStyles();
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.filteredContactsSelector);

  useEffect(() => {
    dispatch(contactsOperations.fetchContactOperation());
    // eslint-disable-next-line
  }, []);

  const handleDeleteContact = (id) => {
    return dispatch(contactsOperations.deleteContactOperation(id));
  };

  return (
    <>
      {contacts.length > 0 ? (
        <ul className={contact_list}>
          {contacts.map(({ name, number, id, favourite }) => {
            return (
              <li key={name} className={contact_item}>
                <p className={contact_text}>
                  <span>{name}</span>
                  <span>{number}</span>
                </p>
                <div className={button_group}>
                  <Button
                    className={styles.button_mobile}
                    onClick={() => handleDeleteContact(id)}
                  >
                    <BackspaceTwoToneIcon color="action" />
                  </Button>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <p className={no_contacts}>No contacts</p>
      )}
    </>
  );
};

export default ContactList;
