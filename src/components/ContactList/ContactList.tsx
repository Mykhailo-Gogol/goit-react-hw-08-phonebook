import React, { useEffect } from "react";
import { useMedia } from "react-use";

import {
  contact_item,
  contact_text,
  contact_list,
  no_contacts,
  button_mobile,
  contact_list_mobile,
  contact_item_mobile,
  contact_text_mobile,
} from "./ContactListStyle";

// Redux
import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// Material
import Button from "@material-ui/core/Button";
import BackspaceTwoToneIcon from "@material-ui/icons/BackspaceTwoTone";

const ContactList: React.FC = () => {
  const isMobile = useMedia("(max-width: 767px)");
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.filteredContactsSelector);

  useEffect(() => {
    dispatch(contactsOperations.fetchContactOperation());
    // eslint-disable-next-line
  }, []);

  const handleDeleteContact = (id: number) => {
    return dispatch(contactsOperations.deleteContactOperation(id));
  };

  type TContact = { name: string; number: number; id: number };

  return (
    <>
      {contacts.length > 0 ? (
        <ul style={isMobile ? contact_list_mobile : contact_list}>
          {contacts.map(({ name, number, id }: TContact) => {
            return (
              <li
                key={name}
                style={isMobile ? contact_item_mobile : contact_item}
              >
                <p style={isMobile ? contact_text_mobile : contact_text}>
                  <span>{name}</span>
                  <span>{number}</span>
                </p>
                <div>
                  <Button
                    style={button_mobile}
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
        <p style={no_contacts}>No contacts</p>
      )}
    </>
  );
};

export default ContactList;
