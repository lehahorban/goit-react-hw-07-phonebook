import PropTypes from 'prop-types';
import shortid from 'shortid';
import style from './ContactList.module.css';
import { useSelector } from 'react-redux';

function ContactList({ contacts, deleteUser }) {
  const isLoading = useSelector(store => store.contacts.loading);
  console.log(isLoading);

  return (
    <ul className={style.list}>
      <p>Contact</p>
      {isLoading && <p>Loading...</p>}
      {contacts.map(({ id, name, phone }) => (
        <li key={shortid.generate()}>
          {name}: {phone}
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

// import PropTypes from 'prop-types';
// import shortid from 'shortid';
// import style from './ContactList.module.css';

// function ContactList({ contacts, deleteUser }) {
//   return (
//     <ul className={style.list}>
//       <p>Contact</p>
//       {contacts.map(({ id, name, number }) => (
//         <li key={shortid.generate()}>
//           {name}: {number}
//           <button onClick={() => deleteUser(id)}>Delete</button>
//         </li>
//       ))}
//     </ul>
//   );
// }

// ContactList.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   deleteUser: PropTypes.func.isRequired,
// };

// export default ContactList;
