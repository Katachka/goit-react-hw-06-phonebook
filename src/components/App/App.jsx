// import { useSelector } from 'react-redux';
import { Container,Title,Subtitle } from './App.styled';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const App = () => {
  // const users = useSelector(state => state.contacts.items);

  return (
    <Container>
      <Title>Phonebook</Title>
        <ContactForm />
     
     
        <Subtitle>Contacts</Subtitle>
        {/* {!users.length ? (
          Notify.info('Your phonebook is empty. Add your first contact')
        ) : (
      <>
        Notify.info('Your phonebook has {users.length} contacts') */}
            {/* <h3>Your phonebook has {users.length} contacts</h3> */}
            <Filter />
            <ContactList />
          {/* </>
        )} */}
     
    </Container>
  );
};
