import { MessageActionTypes } from "../types";

export const messageReceived = (message: any) => {
  return {
    type: MessageActionTypes.SEND_MESSAGE_RESPONSE,
    payload: message,
  };
};

export const sendMessage = (message: any) => {
  return {
    type: MessageActionTypes.SEND_MESSAGE_REQUEST,
    payload: message,
  };
};

export const messageSent = () => {
  return {
    type: MessageActionTypes.MESSAGE_SENT,
  };
};

export const changeUsername = (username: string) => {
  return {
    type: MessageActionTypes.USER_CHANGED,
    payload: username,
  };
};
