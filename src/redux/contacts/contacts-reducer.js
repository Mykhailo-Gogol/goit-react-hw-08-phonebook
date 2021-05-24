import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./contacts-actions";

const contactsState = {
  items: [],
  filter: "",
  loading: false,
};

const contacts = createReducer(contactsState.items, {
  // FETCH
  [contactsActions.onFetchContactsSuccess]: (state, { payload }) => payload,

  // ADD
  [contactsActions.onAddContactSuccess]: (state, { type, payload }) => [
    payload,
    ...state,
  ],

  // DELETE
  [contactsActions.onDeleteContactSuccess]: (state, { type, payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(contactsState.loading, {
  [contactsActions.onAddContactRequest]: () => true,
  [contactsActions.onAddContactSuccess]: () => false,
  [contactsActions.onAddContactFailure]: () => false,
  [contactsActions.onDeleteContactRequest]: () => true,
  [contactsActions.onDeleteContactSuccess]: () => false,
  [contactsActions.onDeleteContactFailure]: () => false,

  [contactsActions.onFetchContactsRequest]: () => true,
  [contactsActions.onFetchContactsSuccess]: () => false,
  [contactsActions.onFetchContactsFailure]: () => false,
});

const filter = createReducer(contactsState.filter, {
  [contactsActions.onChangeFilter]: (state, { type, payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
});
