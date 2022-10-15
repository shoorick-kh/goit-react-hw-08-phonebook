import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import s from './ContactItem.module.css';
import PropTypes, { string } from 'prop-types';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };
  return (
    <li className={s.item}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.number}>{contact.phone}</span>
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
    phone: string.isRequired,
  }),
};
