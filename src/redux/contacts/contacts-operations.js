import axios from "axios";
import contactsActions from "./contacts-actions";
import {
  addContactSuccess,
  deleteContactSuccess,
} from "../../utils/success-notifications/success-notifications.js";
import { connectionErrorValidation } from "../../utils/error-notifications/error-notifications.js";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

// FETCH CONTACTS
const fetchContactOperation = (payload) => (dispatch) => {
  dispatch(contactsActions.onFetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(contactsActions.onFetchContactsSuccess(data)))
    .catch((error) => {
      connectionErrorValidation(error.message);
      dispatch(contactsActions.onFetchContactsFailure(error));
    });
};

// ADD
const addContactOperation = (payload) => (dispatch) => {
  dispatch(contactsActions.onAddContactRequest());

  axios
    .post("/contacts", payload)
    .then(({ data }) => {
      dispatch(contactsActions.onAddContactSuccess(data));
      addContactSuccess(payload.name);
    })
    .catch((error) => {
      connectionErrorValidation(error.message);
      dispatch(contactsActions.onAddContactFailure(error));
    });
};

// DELETE
const deleteContactOperation = (id) => (dispatch) => {
  dispatch(contactsActions.onDeleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(contactsActions.onDeleteContactSuccess(id));
      deleteContactSuccess();
    })
    .catch((error) => {
      connectionErrorValidation(error.message);
      dispatch(contactsActions.onDeleteContactFailure(error));
    });
};

const contactsOperations = {
  fetchContactOperation,
  addContactOperation,
  deleteContactOperation,
};

export default contactsOperations;
