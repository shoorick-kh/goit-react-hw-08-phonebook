import s from './Header.module.css';

export const Header = () => {
  return (
    <header>
      <section>
        <h1 className={s.title}>Phone book</h1>
      </section>
    </header>
  );
};
