import { User } from 'models/User';
import { UserActionTypes } from 'state/types';

export interface IUserState {
  user: User | null;
}

export interface IUserAction {
  type: UserActionTypes;
  payload: User;
}
