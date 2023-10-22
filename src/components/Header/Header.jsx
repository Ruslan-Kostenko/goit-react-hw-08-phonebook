import { useAuth } from 'hooks';
import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { StyledHeader } from './Header.styled';

export default function Header() {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeader>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
}