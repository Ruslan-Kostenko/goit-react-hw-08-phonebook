import { Helmet } from 'react-helmet';


export default function Home() {
    return (
    <>
      <Helmet title="Phonebook" />

      
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
          
        </div>
    </>
  );
}