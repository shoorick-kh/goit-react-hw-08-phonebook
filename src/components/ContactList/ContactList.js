import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import s from './ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const names = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = () => {
    return names.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  const contacts = filteredContacts();
  return (
    <ul className={s.list}>
      {contacts &&
        contacts.map(contact => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
    </ul>
  );
};
