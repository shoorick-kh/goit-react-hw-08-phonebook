import s from './ContactForm.module.css';

const handleSubmit = () => {};

export const ContactForm = () => {
  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label}>
        Name:
        <input
          className={s.input}
          type="text"
          name="name"
          // value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          // onChange={handleChangeInput}
        />
      </label>
      <label className={s.label}>
        Tel:
        <input
          className={s.input}
          type="tel"
          name="number"
          // value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          // onChange={handleChangeInput}
        />
      </label>
      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
