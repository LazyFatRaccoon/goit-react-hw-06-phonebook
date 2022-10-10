import React from 'react';
import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { FaTrashAlt } from 'react-icons/fa';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { useDispatch } from 'react-redux';

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.li}>
      <span>
        {contact.name} {contact.telephone}{' '}
      </span>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact({ id: contact.id }))}
      >
        <FaTrashAlt className={css.icon} size={40} />
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    telephone: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
