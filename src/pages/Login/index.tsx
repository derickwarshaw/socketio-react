import React, { FormEvent, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import './Login.scss';

import { UserValidator } from '../../utils/validators';
import StateSocketService from 'services/StateSocketSergice';
import { User } from 'models/User';

const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [stateSocketService, _] = useState(StateSocketService.getInstance());
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

    stateSocketService.createUser(user);
    setLogin('');

    history.push('/');
  };

  return (
    <section className='Login'>
      <div className='Login__inner'>
        <h2 className='Login__heading'>Tell your name</h2>

        <form onSubmit={submitUser} className='Login__form'>
          <div className='form-field'>
            <label className='form-label'>
              Login
            </label>
            <input
              className='form-input'
              type='text'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </div>

          <button className='btn btn--primary Login__submit' type='submit'>Sign In</button>
        </form>
      </div>
    </section>
  );
};

export default withRouter(Login);
