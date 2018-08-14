export const actionTypes = {
  JUMP_TO: 'JUMP_TO',
  PLAYER_MOVE: 'PLAYER_MOVE'
};

export const actionCreator = (() => ({
  jumpTo: payload => ({ type: actionTypes.JUMP_TO, payload }),
  playerMove: payload => ({ type: actionTypes.PLAYER_MOVE, payload })
}))();

export default actionCreator;
