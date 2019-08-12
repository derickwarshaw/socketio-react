import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import messageReducer from './messages/reducer';

export default function configureStore() {
  const rootReducer = combineReducers({
    messageReducer,
  });

  return createStore(rootReducer, applyMiddleware(thunk));
}
