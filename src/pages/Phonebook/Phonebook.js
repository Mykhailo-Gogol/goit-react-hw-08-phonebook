// REDUX
import { useSelector } from "react-redux";
import phonebookSelectors from "../../redux/phonebook/phonebook-selectors";

// COMP
import Form from "../../components/Form";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";

const Phonebook = () => {
  const isLoading = useSelector(phonebookSelectors.isLoadingSelector);
  const contactsLength = useSelector(phonebookSelectors.contactsSelector)
    .length;

  return (
    <div style={isLoading ? { filter: "blur(20px)" } : null}>
      <h1>Phonebook</h1>
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

export default Phonebook;
