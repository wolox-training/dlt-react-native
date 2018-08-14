export const actionTypes = {
  JUMP_TO: 'JUMP_TO',
  PLAYER_MOVE: 'PLAYER_MOVE'
}

export const gameActions = (() => {
  return {
    jumpTo: (step) => ({ type: actionTypes.JUMP_TO, step }),
    playerMove: (squareNum) => ({ type: actionTypes.PLAYER_MOVE, squareNum })
  }
})()

export default gameActions;
