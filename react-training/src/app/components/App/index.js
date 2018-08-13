import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import Login from '../../screens/Login';
import { createAppStore } from '../../../redux/store';
import style from './styles.scss';


const App = () => {
  const store = createAppStore()
  return (
  <div className={style.app}>
    <main className={style.appMain}>
      <Router>
        <Route exact path="/" component={Login} />
      </Router>
    </main>
  </div>
  )
}

export default App;
