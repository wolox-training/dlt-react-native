import React, { Component } from 'react';
import logo from '../../../logo.svg';
import style from './styles.scss';
import Game from '../../screens/Game';

class App extends Component {
  render() {
    return (
      <div className={style.app}>
        <header className={style.appHeader}>
          <img src={logo} className={style.appLogo} alt="logo" />
          <h1 className={style.appTitle}>Welcome to React</h1>
        </header>
        <main className={style.appMain}>
          <Game />
        </main>
      </div>
    );
  }
}

export default App;
