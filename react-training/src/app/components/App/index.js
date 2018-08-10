import React from 'react';

import Game from '../../screens/Game';

import style from './styles.scss';

const App = () =>
  <div className={style.app}>
    <main className={style.appMain}>
      <Game />
    </main>
  </div>

export default App;
