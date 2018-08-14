import { createStore } from 'redux';

import reducer from './game/reducer';

export const createAppStore = () => createStore(reducer);
