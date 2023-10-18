import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { Toaster } from 'react-hot-toast';
import { PhoneList } from 'components/Phonelist/PhoneList';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import CountOfContacts from 'components/Header/Counter';
import { selectTotalContacts } from 'redux/contacts/selectors';
import Message from 'components/Message';

export default function Contacts() {
  const dispatch = useDispatch();
  const contactsLength = useSelector(selectTotalContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      <Helmet title="Your contacts" />

      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <CountOfContacts />
      <Filter />
      {contactsLength === 0 ? (
        <Message message="Oops! Contact's list is empty..." />
      ) : (
        <PhoneList />
      )}

      <Toaster />
    </div>
  );
}