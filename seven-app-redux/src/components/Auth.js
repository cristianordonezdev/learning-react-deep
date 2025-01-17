import { useDispatch } from 'react-redux';
import classes from './Auth.module.css';
import { authActions } from '../store/authentication';

const Auth = () => {
  const dispatch = useDispatch();

  function onSubmitLogin(event) {
    event.preventDefault();
    const fd = new FormData(event.target)
    const data = Object.fromEntries(fd.entries())

    event.target.reset();

    dispatch(authActions.login())
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={onSubmitLogin}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' name='email'/>
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' name='password'/>
          </div>
          <button type='submit'>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
