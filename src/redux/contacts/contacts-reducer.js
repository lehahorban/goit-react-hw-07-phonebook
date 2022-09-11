// import { createReducer, combineReducers } from '@reduxjs/toolkit';
// import * as contactActions from './contacts-actions';

// const entities = createReducer([], {
//   [contactActions.fetchContactsSuccess]: (state, action) => action.payload,
// });

// const isLoading = createReducer(false, {
//   [contactActions.fetchContactsRequest]: () => true,
//   [contactActions.fetchContactsSuccess]: () => false,
//   [contactActions.fetchContactsError]: () => false,
// });

// const error = createReducer(null, {
//   [contactActions.fetchContactsError]: (state, action) => action.payload,
//   [contactActions.fetchContactsRequest]: () => null,
// });

// export default combineReducers({
//   entities,
//   isLoading,
//   error,
// });

import { createReducer } from '@reduxjs/toolkit';

import contactActions from './contacts-actions';
const initialStore = {
  items: [],
  loading: false,
  error: null,
};

export const contactsReducer = createReducer(initialStore, {
  [contactActions.fetchContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [contactActions.fetchContactsSuccess]: (store, { payload }) => {
    store.items = payload;
    store.loading = false;
  },
  [contactActions.fetchContactsError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },

  [contactActions.addContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [contactActions.addContactsSuccess]: (store, { payload }) => {
    store.loading = false;
    store.items.push(payload);
  },
  [contactActions.addContactsError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },

  [contactActions.removeContactsLoading]: store => {
    store.loading = true;
    store.error = null;
  },
  [contactActions.removeContactsSuccess]: (store, { payload }) => {
    store.loading = false;
    store.items = store.items.filter(({ id }) => id !== payload);
  },
  [contactActions.removeContactsError]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },
});

export default contactsReducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { addContacts } from './contacts-actions';
// import { removeContacts } from './contacts-actions';
// const initialStore = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
// export const contactsReducer = createReducer(initialStore, {
//   [addContacts]: (state, action) => [...state, action.payload.payload],
//   [removeContacts]: (state, action) =>
//     state.filter(({ id }) => id !== action.payload),
// });

// export default contactsReducer;
