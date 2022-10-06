import s from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  return (
    <li className={s.item}>
      <span className={s.name}>{contact.name}</span>
      <span className={s.number}>{contact.number}</span>
      <button
        className={s.button}
        type="button"
        // onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </li>
  );
};
