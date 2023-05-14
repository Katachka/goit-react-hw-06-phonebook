import PropTypes from 'prop-types';
import { FaTrash, FaUserAlt } from 'react-icons/fa';
import {
  ContactsContainer,
  Item,
  Wrapper,
  Icon,
  Number,
  Button,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => {
    return state.contacts.items.filter(item =>
      item.name.toLowerCase().trim().includes(state.filter.toLowerCase().trim())
    );
  });
  return (
    <>
      <ContactsContainer>
        {contacts.map(item => (
          <Item key={item.id}>
            <Wrapper>
              <Icon>
                <FaUserAlt />
              </Icon>
              <p>{item.name}</p>
            </Wrapper>

            <Wrapper>
              <Number>{item.number}</Number>
              <Button
                type="button"
                onClick={() => dispatch(deleteContact(item.id))}
              >
                <FaTrash />
              </Button>
            </Wrapper>
          </Item>
        ))}
      </ContactsContainer>
    </>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};
