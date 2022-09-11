import * as contactActions from './contacts-actions';
import { fetchApiContacts } from 'services/services';
export const fetchContacts = () => async dispatch => {
  dispatch(contactActions.fetchContactsRequest());
  try {
    console.log(dispatch);
    const contacts = await fetchApiContacts();
    console.log(contacts);
    dispatch(contactActions.fetchContactsSuccess(contacts));
  } catch (error) {
    dispatch(contactActions.fetchContactsError(error.message));
  }
};
