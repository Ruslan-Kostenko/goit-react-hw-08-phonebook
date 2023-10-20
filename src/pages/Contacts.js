import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/PhoneBook/operations';
import { Toaster } from 'react-hot-toast';
import { ContactList } from 'components/ContactList/ContactList';
import { PhoneBook } from 'components/PhoneBook/PhoneBook';

import { Filter } from 'components/Filter/Filter';
import { selectTotalContacts } from 'redux/PhoneBook/selectors';
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
      <PhoneBook />
      <h2>Contacts</h2>
      <Filter />
      {contactsLength === 0 ? (
        <Message message="Sorry! Contacts list is empty..." />
      ) : (
        <ContactList/>
      )}

      <Toaster />
    </div>
  );
}