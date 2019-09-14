import { User } from 'models/User';

export enum MessageType {
  user,
  system,
}

interface IBaseMessage {
  type: MessageType;
  body: string;
}

interface IUserMessage extends IBaseMessage {
  user: User;
}

interface ISystemMessage extends IBaseMessage {
  user: User;
  date: Date;
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
 * Requered properties: body (string), type (MessageType), user (User), date (Date).
 */
export class SystemMessage implements ISystemMessage {
  public type: MessageType;
  public body: string;
  public user: User;
  public date: Date;

  constructor(messageData: ISystemMessage) {
    this.type = messageData.type;
    this.body = messageData.body;
    this.user = messageData.user;
    this.date = new Date();
  }
}
