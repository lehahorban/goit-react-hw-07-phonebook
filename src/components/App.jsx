import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { useEffect } from 'react';
import * as contactsOperations from '../redux/contacts/contactsOperetions';
import style from '../components/Style.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  addContacts,
  removeContacts,
} from '../redux/contacts/contacts-actions';
import { filterContacts } from '../redux/filter/filter-actions';
import { getFilter, getFilterContacts } from '../redux/filter/filter-selectors';
import { fetchApiContacts } from 'services/services';

function App() {
  const contacts = useSelector(getFilterContacts);
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const onAddContact = payload => {
    const actions = addContacts(payload);
    const { name } = payload;
    const contact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (contact) {
      alert(`Contact ${name} already exists`);
      return;
    }

    dispatch(actions);
  };

  const onRemoveContact = payload => {
    dispatch(removeContacts(payload));
  };

  const onFilterContact = event => {
    dispatch(filterContacts(event.target.value));
  };

  fetchApiContacts();

  return (
    <div className={style.app}>
      <p>Phonebook</p>
      <ContactForm onAddContact={onAddContact} />

      <Filter filter={filter} onChange={onFilterContact} />

      <ContactList contacts={contacts} deleteUser={onRemoveContact} />
    </div>
  );
}

export default App;
