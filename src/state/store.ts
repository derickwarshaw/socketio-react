import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducer';


function configureStore() {
  const rootReducer = combineReducers({
    userReducer,
  });

  return createStore(rootReducer, applyMiddleware(thunk));
}

export const configuredStore = configureStore();
