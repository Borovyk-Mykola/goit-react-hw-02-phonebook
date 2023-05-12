import React from 'react';


const ContactList = ({contacts, onDeleteContact}) => (                                                             
  <ul>
    {contacts.map(({id, name}) => (
        <li key={id}>
            <p>{name}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </li>
    ))}
</ul>
);

export default ContactList