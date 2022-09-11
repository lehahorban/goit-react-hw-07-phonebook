import contactActions from './contacts-actions';
import * as api from 'services/services';
export const fetchContacts = () => {
  const func = async dispatch => {
    try {
      console.log(dispatch);
      dispatch(contactActions.fetchContactsLoading());
      const data = await api.getContacts();
      dispatch(contactActions.fetchContactsSuccess(data));
    } catch (error) {
      dispatch(contactActions.fetchContactsError(error.message));
    }
  };
  return func;
};

export const addContacts = data => {
  const func = async dispatch => {
    try {
      dispatch(contactActions.addContactsLoading());
      const result = await api.addContacts(data);
      dispatch(contactActions.addContactsSuccess(result));
      console.log(dispatch);
    } catch (error) {
      dispatch(contactActions.addContactsError(error.message));
    }
  };
  return func;
};

export const removeContacts = id => {
  const func = async dispatch => {
    try {
      dispatch(contactActions.removeContactsLoading());
      await api.removeContacts(id);
      dispatch(contactActions.removeContactsSuccess(id));
    } catch (error) {
      dispatch(contactActions.removeContactsError(error.message));
    }
  };
  return func;
};

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactActions.fetchContactsLoading());
//   try {
//     console.log(dispatch);
//     const contacts = await fetchApiContacts();
//     console.log(contacts);
//     dispatch(contactActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactActions.fetchContactsError(error.message));
//   }
// };
