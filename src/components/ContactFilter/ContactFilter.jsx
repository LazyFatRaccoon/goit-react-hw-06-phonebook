import React from 'react';
import css from './ContactFilter.module.css';
import { FaSearch } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filter';

const ContactFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  return (
    <div className={css.div}>
      <input
        className={css.input}
        type="text"
        onChange={e => dispatch(setFilter({ filter: e.currentTarget.value }))}
        value={filter}
      ></input>
      <FaSearch className={css.icon} size={40} />
    </div>
  );
};

export default ContactFilter;
