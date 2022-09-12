import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './ContactList.module.css';
import { useSelector } from 'react-redux';

function ContactList({ contacts, deleteUser }) {
  const isLoading = useSelector(store => store.contacts.loading);

  return (
    <ul className={style.list}>
      <p>Contact</p>
      {isLoading && <p className={style.loading}>Loading...</p>}
      {contacts.map(({ id, name, phone, number }) => (
        <li key={shortid.generate()}>
          {name}: {number || phone}
          <button onClick={() => deleteUser(id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default ContactList;
