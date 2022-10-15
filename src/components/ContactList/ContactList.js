import { useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../redux/selectors';
import s from './ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};
