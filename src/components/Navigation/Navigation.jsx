import { useAuth } from 'hooks';
import { NavLink } from 'react-router-dom';
import { StyledNav } from './Navigation.styled';


export default function Navigation() {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <NavLink to="/">Home</NavLink>
      {isLoggedIn && (
        <>
          <NavLink to="/contacts">Contacts</NavLink>
          
        </>
      )}
    </StyledNav>
  );
}