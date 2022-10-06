import s from './FilterName.module.css';

export const FilterName = () => {
  return (
    <label className={s.filter}>
      Find contacts by name:
      <input
        className={s.input}
        type="text"
        // value={value}
        // onChange={onChange}
      />
    </label>
  );
};
