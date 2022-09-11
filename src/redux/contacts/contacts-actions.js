import { createAction } from '@reduxjs/toolkit';
import { generate } from 'shortid';
export const addContacts = createAction(
  'contacts/add',
  function prepare(payload) {
    return {
      payload: {
        id: generate(),
        payload,
      },
    };
  }
);
export const removeContacts = createAction('contacts/remove');

export const fetchContactsRequest = createAction(
  'contacts/fetchContactsRequest'
);
export const fetchContactsSuccess = createAction(
  'contacts/fetchContactsSuccess'
);
export const fetchContactsError = createAction('contacts/fetchContactsError');
