import { useDispatch } from 'react-redux';
import { deleteName } from 'redux/contactsSlice';
import s from './ContactItem.module.css';
import PropTypes, { string } from 'prop-types';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteName(contact.id));
  };
  return (
    <li className={s.item}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.number}>{contact.number}</span>
      <button className={s.button} type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    id: string.isRequired,
    name: string.isRequired,
    number: string.isRequired,
  }),
};
