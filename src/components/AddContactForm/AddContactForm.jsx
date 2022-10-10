import { useState } from 'react';
import css from './AddContactForm.module.css';
import { FaPlus } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import uniqid from 'uniqid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contactsSlice';

function AddContactForm() {
  const [name, setName] = useState('');
  const [telephone, setTelephone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);

  const handleAddContact = contact => {
    if (
      contacts.some(
        element => element.name.toLowerCase() === contact.name.toLowerCase()
      )
    ) {
      Notify.warning('we already got this contact');
      return;
    }
    dispatch(
      addContact({
        id: uniqid(),
        name: contact.name,
        telephone: contact.telephone,
      })
    );
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'telephone':
        setTelephone(value);
        break;
      default:
        return;
    }
  };

  const resetForm = () => {
    setName('');
    setTelephone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleAddContact({ name, telephone });
    resetForm();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <div>
        <div className={css.div}>
          <input
            value={name}
            className={css.input}
            onChange={handleChange}
            id="name"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            placeholder=" "
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <label className={css.label} htmlFor="name">
            Name
          </label>
        </div>
        <div className={css.div}>
          <input
            value={telephone}
            className={css.input}
            onChange={handleChange}
            type="tel"
            id="telephone"
            name="telephone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            placeholder=" "
            required
          />
          <label htmlFor="telephone" className={css.label}>
            Number
          </label>
        </div>
      </div>

      <button className={css.button} type="submit">
        <FaPlus className={css.icon} size={40} />
      </button>
    </form>
  );
}

export default AddContactForm;
