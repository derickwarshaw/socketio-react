import { User } from "models/User";

export enum MessageType {
  user,
  system,
}

interface IMessage {
  type: MessageType;
  body: string;
}

interface IUserMessage extends IMessage {
  user: User;
}

/**
 * User Message model. Defined messages from/to user.
 * Requered properties: user (IUser), body (string), type (MessageType).
 */
export class UserMessage implements IUserMessage {
  public type: MessageType;
  public user: User;
  public body: string;

  constructor(messageData: IUserMessage) {
    this.type = messageData.type;
    this.user = messageData.user;
    this.body = messageData.body;
  }
}

/**
 * System Message model. Defined messages about connection/disconnection/etc.
 * Requered properties: body (string), type (MessageType).
 */
export class SystemMessage implements IMessage {
  public type: MessageType;
  public body: string;

  constructor(messageData: IMessage) {
    this.type = messageData.type;
    this.body = messageData.body;
  }
}
