import React from 'react';
import css from './ContactList.module.css';
import Contact from './Contact';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter);

  const filteredList = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.telephone.includes(filter)
  );

  return (
    <ul className={css.ul}>
      {filteredList.map(contact => {
        return <Contact key={contact.id} contact={contact} />;
      })}
    </ul>
  );
};

export default ContactList;
