import { useDispatch, useSelector } from 'react-redux';
import { FilterInput } from './Filter.styled';
import { changeFilter } from 'redux/PhoneBook/filterSlice';
import { selectFilter } from 'redux/PhoneBook/selectors';

export const Filter = () => {
const phoneFilter = useSelector(selectFilter);
const dispatch = useDispatch();

  return (
    <>
      <label>
        Find contacts by name
        <FilterInput
          value={phoneFilter}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </>
  );
};
