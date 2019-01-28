import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import store from './store';
import {makeGuess, restartGame} from './actions';

console.log(store.getState());
store.dispatch(makeGuess(40));
console.log(store.getState());
store.dispatch(restartGame());
console.log(store.getState());


ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
