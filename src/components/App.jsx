import { Layout } from './Layout/Layout';
import { AppBar } from './AppBar/AppBar';
import { ContactForm } from './ContactForm/ContactForm';
import { FilterName } from './FilterName/FilterName';
import { ContactList } from './ContactList/ContactList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <ContactForm />
      <FilterName />
      <ContactList />
    </Layout>
  );
};
