import React, { Component } from 'react';
import { connect } from 'react-redux';

import { lines } from '../../constants/lines';

import Board from './Board';

import styles from './styles.scss';

class Game extends Component {

  handleClick = i => {
    const history = this.props.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{ squares }]),
      stepNumber: history.length,
      xIsNext: !this.props.xIsNext
    });
  };

  jumpTo = step => {
    /*this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });*/
  };

  calculateWinner = squares => {
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  moves = history =>
    history.map((step, move) => {
      const desc = move ? `Go to move # ${move}` : `Go to game start`;
      return (
        <li key={move}>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

  getStatus = winner => winner ? `Winner: ${winner}` : `Next player: ${this.props.xIsNext ? 'X' : 'O'}`;

  render() {
    const history = this.state.history;
    const current = history[this.props.stepNumber];
    const winner = this.calculateWinner(current.squares);

    return (
      <div className={styles.game}>
        <Board
          squares={current.squares}
          onClick={i => this.handleClick(i)}
        />
        <div className={styles.info}>
          <div>{this.getStatus(winner)}</div>
          <ol>{this.moves(history)}</ol>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  history: state.history,
  stepNumber: state.stepNumber,
  xIsNext: state.xIsNext
})

export default connect(mapStateToProps)(Game);
