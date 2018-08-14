import { lines } from '../../app/constants/lines';

import { actionTypes } from './actions';

const initialState = {
  history: [
    {
      squares: Array(9).fill(null)
    }
  ],
  stepNumber: 0,
  xIsNext: true,
  winner: ''
};

// TODO: this should be in a utils.js or sth
const calculateWinner = squares => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default function reducer(state = initialState, action) {
  const { squareNum, step } = action;
  const history = state.history.slice(0, state.stepNumber + 1);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const winner = calculateWinner(squares);

  switch (action.type) {
    case actionTypes.JUMP_TO:
      return {
        ...state,
        stepNumber: step,
        xIsNext: step % 2 === 0
      };
    case actionTypes.PLAYER_MOVE:
      if (winner || squares[squareNum]) return { ...state, winner };

      squares[squareNum] = state.xIsNext ? 'X' : 'O';
      return {
        ...state,
        history: history.concat([{ squares }]),
        stepNumber: history.length,
        xIsNext: !state.xIsNext
      };
    default:
      return state;
  }
}