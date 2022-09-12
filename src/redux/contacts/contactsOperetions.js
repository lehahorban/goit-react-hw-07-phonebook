import * as api from 'services/services';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const contacts = await api.getContacts();
    return contacts;
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async data => {
    const result = await api.addContacts(data);
    return result;
  }
);

export const removeContacts = createAsyncThunk(
  'contacts/removeContacts',
  async id => {
    await api.removeContacts(id);
    return id;
  }
);
