import { Dispatch, AnyAction } from 'redux';

import { configuredStore } from 'state/store';
import SocketService from 'services/SocketService';
import { createUser } from 'state/user/actions';
import { emitUserMessage } from 'state/messages/actions';

import { User } from 'models/User';
import { UserMessage } from 'models/Message';

/**
 * Layer between sockets and store for manage same data.
 */
export default class StateSocketService {
  /**
   * Getting instance of StateSocketService.
   */
  public static getInstance(): StateSocketService {
    if (!StateSocketService.instance) {
      StateSocketService.instance = new StateSocketService();
    }

    return StateSocketService.instance;
  }

  /**
   * One Socket instance across the application.
   */
  private static instance: StateSocketService;

  private socketmanager = SocketService.getInstance();
  private dispatch: Dispatch<AnyAction> = configuredStore.dispatch;

  // Can't access to constructor. Required by singleton pattern.
  private constructor() {
    this.socketmanager.connect();
  }

  /**
   * Emit socket message with type 'new user'.
   * Dispatch event for store.
   * @param {User} user User object.
   */
  public createUser(user: User): void {
    // Emit socket message
    this.socketmanager.connectUser(user);
    // Dispatch event for store
    this.dispatch(createUser(user));
  }

  public listenChatMessage(): void {
    this.socketmanager.submitOnMessages((msg: UserMessage) => {
      this.dispatch(emitUserMessage(msg));
    });
  }
}
