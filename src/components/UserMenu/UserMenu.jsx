import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/authOperations';
import { useAuth } from 'hooks';
import { StyledUserMenu } from './UserMenu.styled';


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <StyledUserMenu>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </StyledUserMenu>
  );
}