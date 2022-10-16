import s from './Container.module.css';

export const Container = ({ children }) => {
  return <main className={s.container}>{children}</main>;
};
