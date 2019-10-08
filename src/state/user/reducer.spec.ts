import userReducer from './reducer';
import { IUserState } from './interfaces';
import { User } from 'models/User';


describe('User Reducer', () => {

  it('Should return default state', () => {
    const defaultState: IUserState = { user: null };
    const newState = userReducer(undefined, {} as any);

    expect(newState).toEqual(defaultState);
  });

  it('Should save user to Redux', () => {
    // const user = new User();
  });

});
