import React from 'react';

import { Provider } from 'react-redux';

import Game from '../../screens/Game';
import { createAppStore } from '../../../redux/store';
import style from './styles.scss';


const App = () => {
  const store = createAppStore()
  return (<div className={style.app}>
    <main className={style.appMain}>
      <Provider store={store}>
        <Game store={store} />
      </Provider>
    </main>
  </div>
  )
}

export default App;
