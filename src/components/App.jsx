import AddContactForm from './AddContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        padding: '0px 50px',
        gap: '20px',
      }}
    >
      <h1 style={{ margin: '0px' }}>Phonebook</h1>
      <AddContactForm/>
      <ContactFilter/>
      <h2 style={{ margin: '0px' }}>Contact list</h2>
      <ContactList/>
    </div>
  );
}
