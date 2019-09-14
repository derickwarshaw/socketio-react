import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configuredStore } from './state/store';

import './index.scss';
import TheRouter from './router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={configuredStore}>
    <header className='App__header'>
      <h1 className='App__heading App__heading--top'>Socket IO Chat</h1>
    </header>

    <main className='App__main'>
      <TheRouter />
    </main>

    <footer className='App__footer'>
      <h1 className='App__heading App__heading--bottom'>Created by Povalishev Nikita</h1>
    </footer>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
