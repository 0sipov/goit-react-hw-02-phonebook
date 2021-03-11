import React from 'react';

const ContactList = ({ filtredContacts }) => {
  return (
    <ul>
      {filtredContacts.map(e => {
        return (
          <li key={e.id}>
            {e.name}: {e.number}
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
