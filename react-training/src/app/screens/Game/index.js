import React, { Component } from 'react';
import { connect } from 'react-redux';

import gameActions from '../../../redux/game/actions';
import Board from './Board';

import styles from './styles.scss';

class Game extends Component {

  moves = history =>
    history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

  getStatus = winner => winner ? `Winner: ${winner}` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    return (
      <div className={styles.game}>
        <Board
          squares={current.squares}
          onClick={this.props.playerMove}
        />
        <div className={styles.info}>
          <div>{this.getStatus(this.props.winner)}</div>
          <ol>{this.moves(history)}</ol>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  jumpTo: (step) => { return dispatch(gameActions.jumpTo(step))},
  playerMove: (squareNum) => { return dispatch(gameActions.playerMove(squareNum))}
})

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  winner: state.winner
})

export default connect(mapStateToProps, mapDispatchToProps)(Game);
