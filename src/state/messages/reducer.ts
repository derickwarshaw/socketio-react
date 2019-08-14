import { MessageActionTypes } from 'state/types';
import { IMessageState, IUserMessageAction } from './interfaces';

const INIT_STATE: IMessageState = {
  userMSGs: [],
};

export default (state: IMessageState = INIT_STATE, action: IUserMessageAction) => {
  switch (action.type) {
    case MessageActionTypes.EMIT_USER_MSG:
      return {
        ...state,
        userMSGs: [...state.userMSGs, action.payload],
      };

    default:
      return state;
  }
};
