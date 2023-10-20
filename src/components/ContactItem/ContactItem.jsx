import { useDispatch } from 'react-redux';
import { ContItemEl, ContactBtn } from './ContactItem.styled';
import { fetchDeleteContact } from 'redux/PhoneBook/operations';
import { NavLink, useLocation } from 'react-router-dom';

export const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const location = useLocation();

  return (
    <ContItemEl>
      <NavLink to={`/contacts/${id}`} state={{ from: location }}>
        <div>
          {name}: {number}
        </div>
      </NavLink>
      <ContactBtn
        onClick={() => dispatch(fetchDeleteContact(id))}
        value={id}
        type="button"
      >
        Delete
      </ContactBtn>
    </ContItemEl>
  );
};
