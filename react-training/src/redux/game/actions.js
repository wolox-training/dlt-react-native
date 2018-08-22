export const actionTypes = {
  JUMP_TO: 'JUMP_TO',
  PLAYER_MOVE: 'PLAYER_MOVE'
};

const TARGET = 'game';

export const gameActions = {
  jumpTo: step => ({ type: actionTypes.JUMP_TO, step, target: TARGET }),
  playerMove: squareNum => ({ type: actionTypes.PLAYER_MOVE, squareNum, target: TARGET })
};

export default gameActions;
