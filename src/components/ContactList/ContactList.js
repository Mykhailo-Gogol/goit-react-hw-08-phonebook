import { useEffect } from "react";

import {
  contact_item,
  contact_text,
  button_group,
  contact_list,
} from "./ContactList.module.scss";

import { useSelector, useDispatch } from "react-redux";
import contactsOperations from "../../redux/contacts/contacts-operations";
import contactsSelectors from "../../redux/contacts/contacts-selectors";
// import authSelectors from "../../redux/auth/auth-selectors";

// Material
import Button from "@material-ui/core/Button";
import BackspaceTwoToneIcon from "@material-ui/icons/BackspaceTwoTone";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// import BookmarkIcon from "@material-ui/icons/Bookmark";
// import { blue } from "@material-ui/core/colors";

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.filteredContactsSelector);
  // const isAuthenticated = useSelector(authSelectors.isAuthenticatedSelector);

  useEffect(() => {
    dispatch(contactsOperations.fetchContactOperation());
    // eslint-disable-next-line
  }, []);

  // const filteredContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();
  //   return contacts.filter(
  //     ({ name, number }) =>
  //       name.toLowerCase().includes(normalizedFilter) ||
  //       number.toLowerCase().includes(normalizedFilter),
  //   );
  // };

  const handleDeleteContact = (id) => {
    return dispatch(contactsOperations.deleteContactOperation(id));
  };

  // const handleToggleFavourite = (update) => {
  //   return dispatch(contactsOperations.toggleContactFavourite(update));
  // };

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

                  {/* <Button
                    className="favourite-button"
                    onClick={() =>
                      handleToggleFavourite({ id, favourite: !favourite })
                    }
                  >
                    {favourite ? (
                      <BookmarkIcon style={{ color: blue[500] }} />
                    ) : (
                      <BookmarkBorderIcon color="disabled" />
                    )}
                  </Button> */}
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
