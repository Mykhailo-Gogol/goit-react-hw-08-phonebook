import { useEffect } from "react";

import {
  contact_item,
  contact_text,
  button_group,
  contact_list,
} from "./ContactList.module.scss";

// Redux
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// Material
import Button from "@material-ui/core/Button";
import BackspaceTwoToneIcon from "@material-ui/icons/BackspaceTwoTone";

const ContactList = () => {
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
        <ol className={contact_list}>
          {contacts.map(({ name, number, id, favourite }) => {
            return (
              <li key={name} className={contact_item}>
                <p className={contact_text}>
                  <span>{name}</span>
                  <span>{number}</span>
                </p>
                <div className={button_group}>
                  <Button
                    className="delete-button"
                    onClick={() => handleDeleteContact(id)}
                  >
                    <BackspaceTwoToneIcon color="primary" />
                  </Button>
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <p>Sorry, no matches found.</p>
      )}
    </>
  );
};

export default ContactList;
