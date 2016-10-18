/* jshint esversion: 6 */

class Game {
  constructor() {
    this.board = _buildBoard();
    this.players = ['X', 'O'];
    this.expectedPlayer = _coinToss();
    this.numberOfPlays = 0;
  }

  _buildBoard() {
    return Array(3).fill(['_','_','_']);
  }

  _coinToss() {
    const rando = Math.floor(Math.random() * 2);
    return this.players[rando];
  }

  _nextPlayer() {
    return this.expectedPlayer === 'X' ? 'O' : 'X';
  }

  reset() {
    this.board = _buildBoard();
    this.expectedPlayer = _coinToss();
    this.numberOfPlays = 0;
  }

  play(player, row, column) {
    if (player === this.expectedPlayer) {
      if ( _conflictAt(row, column) ) {
        console.log('Sorry, that seat it taken.');
      } else {
        this.board[row][column] = player;
        _checkForWinner();
        this.numberOfPlays++;
        if (this.numberOfPlays === 9) {
          console.log(`It's a draw! Want to start a new game?`);
        }
      }
    } else {
      console.log(`Expected first argument to be player ${this.expectedPlayer}. Try again.`);
    }
  }

  _conflictAt(row, column) {
    return !(this.board[row][column] === '_');
  }

  _checkForWinner() {
    let win = false;
    let winner;
    // iterate over board
    //

    if (win) {
      console.log(`${winner} won! Want to start a new game?`);
    }
    this.expectedPlayer = _nextPlayer();
  }

}
