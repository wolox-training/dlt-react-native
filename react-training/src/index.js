import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './scss/index.scss';
import store from './redux/store';
import registerServiceWorker from './registerServiceWorker';
import App from './app/components/App';

const RenderApp = () => (
  <main>
    <Provider store={store}>
      <App />
    </Provider>
  </main>
);

ReactDOM.render(<RenderApp />, document.getElementById('root'));
registerServiceWorker();
