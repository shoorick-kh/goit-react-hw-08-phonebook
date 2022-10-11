import { useDispatch } from 'react-redux';
import { filterName } from '../../redux/contactsSlice';

import s from './FilterName.module.css';

export const FilterName = () => {
  const dispatch = useDispatch();

  const onChange = evt => {
    dispatch(filterName(evt.target.value));
  };
  return (
    <label className={s.filter}>
      Find contacts by name:
      <input className={s.input} type="text" onChange={onChange} />
    </label>
  );
};
