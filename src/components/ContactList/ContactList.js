import { useSelector } from 'react-redux';
import { getNames, getFilter } from '../../redux/selectors';
import s from './ContactList.module.css';
import { ContactItem } from '../ContactItem/ContactItem';

export const ContactList = () => {
  const names = useSelector(getNames);
  const filter = useSelector(getFilter);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
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
