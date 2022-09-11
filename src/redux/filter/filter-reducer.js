import { createReducer } from '@reduxjs/toolkit';
import { filterContacts } from './filter-actions';
const filterReducer = createReducer('', {
  [filterContacts]: (state, action) => action.payload,
});

export default filterReducer;

