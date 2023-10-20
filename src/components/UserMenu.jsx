import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/authOperations';
import { useAuth } from 'hooks';


export default function UserMenu() {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div>
      <p>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}