import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ filtredContacts, onRemoveContact }) => {
  return (
    <ul className={styles.contacts}>
      {filtredContacts.map(elem => {
        return (
          <li className={styles.contact} key={elem.id}>
            <p>
              {elem.name}: {elem.number}
            </p>
            <button
              className={styles.removeButton}
              type="button"
              onClick={() => {
                onRemoveContact(elem.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func,
  filtredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
};

export default ContactList;
