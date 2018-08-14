import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { gameActions } from '../../../redux/game/actions';

import Board from './Board';
import styles from './styles.scss';

class Game extends Component {
  getStatus = winner => (winner ? `Winner: ${winner}` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`);

  moves = history =>
    history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.props.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

  render() {
    const history = this.props.history;
    const current = history[this.props.stepNumber];
    return (
      <div className={styles.game}>
        <Board squares={current.squares} onClick={this.props.playerMove} />
        <div className={styles.info}>
          <div>{this.getStatus(this.props.winner)}</div>
          <ol>{this.moves(history)}</ol>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  jumpTo: step => dispatch(gameActions.jumpTo(step)),
  playerMove: squareNum => dispatch(gameActions.playerMove(squareNum))
});

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext,
  winner: state.winner
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);

Game.propTypes = {
  xIsNext: PropTypes.string,
  history: PropTypes.arrayOf(
    PropTypes.shape({
      squares: PropTypes.arrayOf(PropTypes.number)
    })
  ).isRequired,
  stepNumber: PropTypes.number,
  winner: PropTypes.string,
  playerMove: PropTypes.func,
  jumpTo: PropTypes.func
};
