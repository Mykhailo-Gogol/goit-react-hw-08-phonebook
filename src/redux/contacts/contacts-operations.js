import axios from "axios";
import contactsActions from "./contacts-actions";

import { connectionErrorValidation } from "../../utils/notifications";

axios.defaults.baseURL = "http://localhost:4000";

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
  const contact = {
    ...payload,
    favourite: false,
  };

  dispatch(contactsActions.onAddContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(contactsActions.onAddContactSuccess(data)))
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
    .then(() => dispatch(contactsActions.onDeleteContactSuccess(id)))
    .catch((error) => {
      connectionErrorValidation(error.message);
      dispatch(contactsActions.onDeleteContactFailure(error));
    });
};

// TOGGLE
const toggleContactFavourite = ({ id, favourite }) => (dispatch) => {
  dispatch(contactsActions.onToggleFavouriteRequest());

  const update = { favourite };

  axios
    .patch(`/contacts/${id}`, update)
    .then(({ data }) =>
      dispatch(contactsActions.onToggleFavouriteSuccess(data))
    )
    .catch((error) => {
      connectionErrorValidation(error.message);
      dispatch(contactsActions.onToggleFavouriteFailure(error));
    });
};

const contactsOperations = {
  fetchContactOperation,
  addContactOperation,
  deleteContactOperation,
  toggleContactFavourite,
};

export default contactsOperations;
