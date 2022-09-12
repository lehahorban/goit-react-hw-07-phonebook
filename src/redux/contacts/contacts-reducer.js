import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContacts,
  removeContacts,
} from './contactsOperetions';

const initialStore = {
  items: [],
  loading: false,
  error: null,
};

export const contactsReducer = createReducer(initialStore, {
  [fetchContacts.pending]: store => {
    store.loading = true;
    store.error = null;
  },
  [fetchContacts.fulfilled]: (store, { payload }) => {
    store.items = payload;
    store.loading = false;
  },
  [fetchContacts.rejected]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },

  [addContacts.pending]: store => {
    store.loading = true;
    store.error = null;
  },
  [addContacts.fulfilled]: (store, { payload }) => {
    store.loading = false;
    store.items.push(payload);
    // store.items = [...store.items, payload];
  },
  [addContacts.rejected]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },

  [removeContacts.pending]: store => {
    store.loading = true;
    store.error = null;
  },
  [removeContacts.fulfilled]: (store, { payload }) => {
    store.loading = false;
    store.items = store.items.filter(({ id }) => id !== payload);
  },
  [removeContacts.rejected]: (store, { payload }) => {
    store.loading = false;
    store.error = payload;
  },
});

export default contactsReducer;
