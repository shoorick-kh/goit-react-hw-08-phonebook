import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from 'redux/operations';
import { selectIsLoading, selectError } from 'redux/selectors';
import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterName } from './FilterName/FilterName';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <ContactForm />
      <FilterName />
      {isLoading && !error && <b>... please wait ...</b>}
      <ContactList />
    </Layout>
  );
};
