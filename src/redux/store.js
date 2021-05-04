import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import authReducer from "../redux/auth/auth-reducer";
import contactsReducer from "../redux/contacts/contacts-reducer";

// import rootReducer from "./rootReducer";

// const rootReducer = combineReducers({
//   auth: authReducer,
//   contacts: contactsReducer,
// });

const persistConfig = {
  key: "react_phonebook_token",
  storage,
  whitelist: ["token"],
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
  },
  middleware: middleware,
  devTools: true,
});

export const persistor = persistStore(store);
