import socketIOClient from 'socket.io-client';

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

  // Socket manager
  private socket: SocketIOClient.Socket;

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

    const fullURL = `${this.protocol}//${this.hostname}:${this.port}`;
    this.socket = socketIOClient(fullURL);
  }

  /**
   * Close socket connection.
   */
  public disconnect(): void {
    this.socket.close();
  }
}
