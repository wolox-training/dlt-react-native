import React from 'react';
import { Provider } from 'react-redux';

import Game from '../../screens/Game';
import store from '../../../redux/store';

import style from './styles.scss';

const App = () => (
  <div className={style.app}>
    <main className={style.appMain}>
      <Provider store={store}>
        <Game store={store} />
      </Provider>
    </main>
  </div>
);

export default App;
