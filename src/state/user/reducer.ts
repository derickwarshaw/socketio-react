import { UserActionTypes } from 'state/types';
import { IUserState, IUserAction } from './interfaces';

const INIT_STATE: IUserState = {
  user: null,
};

export default (state: IUserState = INIT_STATE, action: IUserAction) => {
  if (!action) {
    return state;
  }

  switch (action.type) {
    case UserActionTypes.CREATE_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
};
