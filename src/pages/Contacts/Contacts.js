// REDUX
import { useSelector } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// Comps
import Form from "../../components/Form";
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";

const Contacts = () => {
  const isLoading = useSelector(contactsSelectors.isLoadingSelector);

  return (
    <div style={isLoading ? { filter: "blur(20px)" } : null}>
      <h1>Contacts</h1>
      <Form />
      {
        <>
          <Filter />
          <ContactList />
        </>
      }
    </div>
  );
};

export default Contacts;
