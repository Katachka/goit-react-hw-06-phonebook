import { Label, Text, Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter);

  const showFilteredContacts = e => {
    dispatch(filterContacts(e.target.value));
  };

  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={showFilteredContacts} />
    </Label>
  );
};
