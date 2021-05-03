import { combineReducers } from "redux";
import contactsReducer from "./contacts/contacts-reducer";
import authReducer from "./auth/auth-reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  contacts: contactsReducer,
});

export default rootReducer;
