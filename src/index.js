import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import MyInfo from './MyInfo';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyInfo />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
