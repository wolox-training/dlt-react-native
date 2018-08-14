import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from '../../screens/Login';
import Game from '../../screens/Game';
import { createAppStore } from '../../../redux/store';

import style from './styles.scss';

const App = () => {
  const store = createAppStore();
  return (
    <div className={style.app}>
      <main className={style.appMain}>
        <Provider store={store}>
          <Router>
            <Fragment>
              <Route exact path="/" component={Login} />
              <Route path="/game" component={Game} />
            </Fragment>
          </Router>
        </Provider>
      </main>
    </div>
  );
};

export default App;
