import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducer';
import messageReducer from './messages/reducer';


function configureStore() {
  const rootReducer = combineReducers({
    userReducer,
    messageReducer,
  });

  return createStore(rootReducer, applyMiddleware(thunk));
}

export const configuredStore = configureStore();
