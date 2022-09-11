import { createAction } from '@reduxjs/toolkit';

const fetchContactsLoading = createAction('contacts/fetchContactsLoading');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactsLoading = createAction('contacts/add/loading');
const addContactsSuccess = createAction('contacts/add/success');
const addContactsError = createAction('contacts/add/error');

const removeContactsLoading = createAction('contacts/remove/loading');
const removeContactsSuccess = createAction('contacts/remove/success');
const removeContactsError = createAction('contacts/remove/error');

const contactActions = {
  fetchContactsLoading,
  fetchContactsSuccess,
  fetchContactsError,
  addContactsLoading,
  addContactsSuccess,
  addContactsError,
  removeContactsLoading,
  removeContactsSuccess,
  removeContactsError,
};

export default contactActions;
