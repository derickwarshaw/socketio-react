import React, { FormEvent, useState } from 'react';
import { UserValidator } from '../../utils/validators';

const Login: React.FC = () => {
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
    // const isvalidPassword = validator.isvalidPassword(password);

    if (!isvalidLogin) {
      // rewrite for user feedback
      throw Error('[SUBMITING USER] Incorrect user information');
      return;
    }

    console.log('Submit user');
  };

  return (
    <div className="Login">
      <h2>Tell your name</h2>

      <form onSubmit={submitUser} className="Login__field">
        <input type="text" value={login} onChange={e => setLogin(e.target.value)} />
        <button type="button">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
