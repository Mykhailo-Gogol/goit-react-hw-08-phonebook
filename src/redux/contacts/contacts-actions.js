import { createAction } from "@reduxjs/toolkit";

// FETCH CONTACTS
const onFetchContactsRequest = createAction("contacts/FETCH_CONTACTS_R");
const onFetchContactsSuccess = createAction("contacts/FETCH_CONTACTS_S");
const onFetchContactsFailure = createAction("contacts/FETCH_CONTACTS_F");

// ADD
const onAddContactRequest = createAction("contacts/ADD_CONTACT_R");
const onAddContactSuccess = createAction("contacts/ADD_CONTACT_S");
const onAddContactFailure = createAction("contacts/ADD_CONTACT_F");

// DELETE
const onDeleteContactRequest = createAction("contacts/DELETE_CONTACT_R");
const onDeleteContactSuccess = createAction("contacts/DELETE_CONTACT_S");
const onDeleteContactFailure = createAction("contacts/DELETE_CONTACT_F");

// TOGGLE
// const onToggleFavouriteRequest = createAction("contacts/TOGGLE_FAVOURITE_R");
// const onToggleFavouriteSuccess = createAction("contacts/TOGGLE_FAVOURITE_S");
// const onToggleFavouriteFailure = createAction("contacts/TOGGLE_FAVOURITE_F");

// FILTER
const onChangeFilter = createAction("contacts/FILTER_CONTACT");

const contactsActions = {
  onFetchContactsRequest,
  onFetchContactsSuccess,
  onFetchContactsFailure,
  onAddContactRequest,
  onAddContactSuccess,
  onAddContactFailure,
  onDeleteContactRequest,
  onDeleteContactSuccess,
  onDeleteContactFailure,
  // onToggleFavouriteRequest,
  // onToggleFavouriteSuccess,
  // onToggleFavouriteFailure,
  onChangeFilter,
};

export default contactsActions;
