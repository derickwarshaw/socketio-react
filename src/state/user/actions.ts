import { UserActionTypes } from '../types';
import { User } from 'models/User';
import { IUserAction } from './interfaces';

export const createUser = (user: User): IUserAction => ({
  type: UserActionTypes.CREATE_USER,
  payload: user,
});
