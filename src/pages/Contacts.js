import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectError } from 'redux/contacts/selectors';
import { Container } from '../components/Container/Container';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { FilterName } from '../components/FilterName/FilterName';
import { ContactList } from '../components/ContactList/ContactList';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {/* <h1>Phone book</h1> */}
      <Container>
        <h1>Phone book</h1>
        <ContactForm />
        <FilterName />
        {isLoading && !error && <b>... please wait ...</b>}
        <ContactList />
      </Container>
    </>
  );
}
