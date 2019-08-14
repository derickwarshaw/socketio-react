import { UserMessage } from 'models/Message';
import { MessageActionTypes } from 'state/types';

export interface IMessageState {
  userMSGs: UserMessage[];
}

export interface IUserMessageAction {
  type: MessageActionTypes;
  payload: UserMessage;
}
