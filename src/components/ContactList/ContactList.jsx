import { useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { selectContacts, selectFilter } from 'redux/PhoneBook/selectors';


export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const getFiltered = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  const filteredContacts = getFiltered();

  return (
    <ul>
      {filteredContacts.map(contact => {
        return (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
          ></ContactItem>
        );
      })}
    </ul>
  );
};
