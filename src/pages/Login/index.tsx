import React, { FormEvent, useState } from 'react';
import { useDispatch } from 'react-redux';

import { UserValidator } from '../../utils/validators';
import { createUser } from 'state/user/actions';
import { User } from 'models/User';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState('');

  /**
   * Validate and submit user data.
   * Throw error if data is incorrect.
   * @param {FormEvent} e Form submit event.
   */
  const submitUser = (e: FormEvent): void => {
    e.preventDefault();

    const validator = UserValidator.getInstance();
    const isvalidLogin = validator.isvalidLogin(login);

    if (!isvalidLogin) {
      // rewrite for user feedback
      throw Error('[SUBMITING USER] Incorrect user information');
      return;
    }

    const user = new User(login);

    dispatch(createUser(user));
    setLogin('');
  };

  return (
    <div className='Login'>
      <h2>Tell your name</h2>

      <form onSubmit={submitUser} className='Login__field'>
        <input
          type='text'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <button type='submit'>Sign In</button>
      </form>
    </div>
  );
};

export default Login;
