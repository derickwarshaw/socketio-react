import socketIOClient from 'socket.io-client';
import { User } from 'models/User';
import { UserMessage } from 'models/Message';

enum ESocketEvent {
  NEW_USER = 'NEW_USER',
  CHAT_MESSAGE = 'CHAT_MESSAGE',
}

interface ISocketOpts {
  protocol?: string;
  hostname?: string;
  port?: string;
}

/**
 * Singleton service for managing socket connection.
 */
export default class SocketService {
  /**
   * Getting instance of SocketService.
   * @param {ISocketOpts} socketOpts Socket connect options.
   */
  public static getInstance(socketOpts?: ISocketOpts): SocketService {
    if (!SocketService.instance) {
      SocketService.instance = new SocketService(socketOpts);
    }

    return SocketService.instance;
  }

  /**
   * One Socket instance across the application.
   */
  private static instance: SocketService;



  // Defalut properties for creating socket connection
  private protocol = window.location.protocol;
  private hostname = window.location.hostname;
  private port = '3300';
  private fullURL = `${this.protocol}//${this.hostname}:${this.port}`;

  // Socket manager
  private socket: SocketIOClient.Socket | null = null;

  // Can't access to constructor. Required by singleton pattern.
  // Create socket connection with optional options.
  private constructor(socketOpts?: ISocketOpts) {
    if (socketOpts && socketOpts.protocol) {
      this.protocol = socketOpts.protocol;
    }

    if (socketOpts && socketOpts.hostname) {
      this.hostname = socketOpts.hostname;
    }

    if (socketOpts && socketOpts.port) {
      this.port = socketOpts.port;
    }

    this.fullURL = `${this.protocol}//${this.hostname}:${this.port}`;
  }

  /**
   * Send user to socket.
   * @param {User} user Created and logged user.
   */
  public connectUser(user: User): void {
    if (!this.socket) {
      throw new Error('[SOCKET MANAGER]: Trying to emit user. Socket is not created.');
    }

    this.socket.emit(ESocketEvent.NEW_USER, user);
  }

  /**
   * Submit on CHAT_MESSAGE socket event.
   * @param {Function} callback Callback that triggers when recieve message.
   */
  public submitOnMessages(callback: (msg: UserMessage) => void): void {
    if (!this.socket) {
      throw new Error('[SOCKET MANAGER]: Trying to submit on messages. Socket is not created.');
    }

    this.socket.on(ESocketEvent.CHAT_MESSAGE, callback);
  }

  /**
   * Send user message to socket.
   * @param {UserMessage} msg User message.
   */
  public sendUserMessage(msg: UserMessage): void {
    if (!this.socket) {
      throw new Error('[SOCKET MANAGER]: Trying to send message. Socket is not created.');
    }

    this.socket.emit(ESocketEvent.CHAT_MESSAGE, msg);
  }

  /**
   * Create socket connection.
   */
  public connect(): void {
    this.socket = socketIOClient(this.fullURL);
  }

  /**
   * Close socket connection.
   */
  public disconnect(): void {
    if (!this.socket) {
      throw new Error('[SOCKET MANAGER]: Trying to disconnect. Socket is not created.');
    }

    this.socket.close();
  }
}
