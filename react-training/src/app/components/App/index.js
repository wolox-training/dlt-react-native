import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Game from '../../screens/Game';
import reducer from '../../../redux/game/reducer';

import style from './styles.scss';

const store = createStore(reducer)

const App = () =>
  <div className={style.app}>
    <main className={style.appMain}>
      <Provider store={store}>
        <Game store={store}/>
      </Provider>
    </main>
  </div>

export default App;
