import scss_styles from "./Contacts.module.scss";

// REDUX
import { useSelector } from "react-redux";
import contactsSelectors from "../../redux/contacts/contacts-selectors";

// Comps
import Filter from "../../components/Filter";
import ContactList from "../../components/ContactList";

const Contacts = () => {
  const isLoading: boolean = useSelector(contactsSelectors.isLoadingSelector);

  return (
    <div
      style={isLoading ? { filter: "blur(20px)" } : { filter: "blur(0px)" }}
      className={scss_styles.contacts_page_wrapper}
    >
      <Filter />
      <ContactList />
    </div>
  );
};

export default Contacts;
