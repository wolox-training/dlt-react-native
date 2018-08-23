import { createTypes } from 'redux-recompose';

export const actionTypes = createTypes(['JUMP_TO', 'PLAYER_MOVE'], '@@GAME');

const TARGET = 'game';

export const gameActions = {
  jumpTo: step => ({ type: actionTypes.JUMP_TO, step, target: TARGET }),
  playerMove: squareNum => ({ type: actionTypes.PLAYER_MOVE, squareNum, target: TARGET })
};

export default gameActions;
