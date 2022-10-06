import { useSelector } from 'react-redux';
import { getNames } from '../../redux/selectors';
import s from './ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const names = useSelector(getNames);
  return (
    <ul className={s.list}>
      {names.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};
