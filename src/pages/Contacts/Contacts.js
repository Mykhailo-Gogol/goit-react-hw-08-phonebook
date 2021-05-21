import { contacts_page_wrapper } from "./Contacts.module.scss";

// REDUX
import { useSelector } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// Comps
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";

const Contacts = () => {
  const isLoading = useSelector(contactsSelectors.isLoadingSelector);

  return (
    <div
      style={isLoading ? { filter: "blur(20px)" } : null}
      className={contacts_page_wrapper}
    >
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
