import { applyMiddleware, combineReducers, createStore, Reducer } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducer';
import messageReducer from './messages/reducer';

import { IUserState } from './user/interfaces';
import { IMessageState } from './messages/interfaces';

export interface IRootState {
  userReducer: IUserState;
  messageReducer: IMessageState;
}

function configureStore() {
  const appReducers = {
    userReducer,
    messageReducer,
  };

  const rootReducer: Reducer<IRootState> = combineReducers(appReducers);

  return createStore(rootReducer, applyMiddleware(thunk));
}

export const configuredStore = configureStore();
