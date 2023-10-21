import { Helmet } from 'react-helmet';
import { useAuth } from 'hooks';
import { GiOldMicrophone } from 'react-icons/gi';
import Register from './Register';


export default function Home() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Helmet title="Phonebook" />

      {!isLoggedIn ? (
        <Register />
      ) : (
        <div>
          <h1 style={{ fontSize: 44 }}>WELCOME!</h1>
          <b
            style={{
              display: 'inline-block',
              fontSize: 22,
              marginBottom: '13px',
              textTransform: 'uppercase',
            }}
          >
            It's your
          </b>
          <h2 style={{ fontSize: 44 }}>Phonebook Organizer</h2>

          <GiOldMicrophone />
          
        </div>
      )}
    </>
  );
}