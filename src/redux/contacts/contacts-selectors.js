import { createSelector } from "reselect";

// SELECTORS

const contactsSelector = (state) => state.contacts.contacts;

const filterSelector = (state) => state.contacts.filter;

const isLoadingSelector = (state) => state.contacts.loading;

// RESELECT

const contactsReselect = createSelector(
  contactsSelector,
  (contacts) => contacts
);

const filteredContactsSelector = createSelector(
  [contactsSelector, filterSelector],
  (contacts, filter) => {
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(normalizeFilter) ||
        contact.number.toLowerCase().includes(normalizeFilter)
    );
  }
);

const contactsSelectors = {
  contactsSelector,
  filterSelector,
  isLoadingSelector,
  contactsReselect,
  filteredContactsSelector,
};

export default contactsSelectors;
