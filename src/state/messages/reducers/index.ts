import { User } from "models/User";
import { MessageActionTypes } from "../types";

interface IReduxState {
  messages: [];
  currentUser: User | null;
}

interface IReduxAction {
  type: MessageActionTypes;
  paylaod: IReduxState;
}

const INIT_STATE: IReduxState = {
  messages: [],
  currentUser: null,
};

function messageReducer(state = INIT_STATE, action: IReduxAction) {
  switch (action.type) {
    case MessageActionTypes.USER_CHANGED:

    case MessageActionTypes.SEND_MESSAGE_RESPONSE:

    case MessageActionTypes.MESSAGE_SENT:

    default:
      return state;
  }
}

export default messageReducer;
