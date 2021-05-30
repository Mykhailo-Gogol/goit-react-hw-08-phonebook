import { contacts_page_wrapper } from "./ContactsStyle";

// Comps
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";

const Contacts = () => {
  return (
    <div style={contacts_page_wrapper}>
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
