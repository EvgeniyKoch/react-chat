import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import './index.css';
import 'typeface-roboto';

const rootEl = document.getElementById('root');

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    rootEl
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => render(App));
}

registerServiceWorker();
