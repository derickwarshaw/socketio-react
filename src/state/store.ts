import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './user/reducer';


export default function configureStore() {
  const rootReducer = combineReducers({
    userReducer,
  });

  return createStore(rootReducer, applyMiddleware(thunk));
}
