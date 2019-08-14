import { UserMessage } from 'models/Message';
import { MessageActionTypes } from 'state/types';
import { IUserMessageAction } from './interfaces';

export const emitUserMessage = (msg: UserMessage): IUserMessageAction => ({
  type: MessageActionTypes.EMIT_USER_MSG,
  payload: msg,
});
