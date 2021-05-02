// REDUX
import { useSelector } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// COMP
import Form from "../../components/Form";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";

const Contacts = () => {
  const isLoading = useSelector(contactsSelectors.isLoadingSelector);
  const contactsLength = useSelector(contactsSelectors.contactsSelector).length;

  return (
    <div style={isLoading ? { filter: "blur(20px)" } : null}>
      <h1>Contacts</h1>
      <Form />
      {contactsLength > 0 && (
        <>
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </>
      )}
    </div>
  );
};

export default Contacts;
