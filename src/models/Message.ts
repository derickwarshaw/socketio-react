import { User } from 'models/User';

interface IMessage {
  body: string;
}

interface IUserMessage extends IMessage {
  user: User;
}

/**
 * User Message model. Defined messages from/to user.
 * Requered properties: user (IUser), body (string).
 */
export class UserMessage implements IUserMessage {
  constructor(public user: User, public body: string) {}
}

/**
 * System Message model. Defined messages about connection/disconnection/etc.
 * Requered properties: body (string).
 */
export class SystemMessage implements IMessage {
  constructor(public body: string) {}
}
