import { AuthForm } from './authForm';
import s from './index.module.scss';

const AuthPageWrapper = () => (
  <div className={s.authWrapper}>
    <AuthForm />
  </div>
);

export default AuthPageWrapper;
