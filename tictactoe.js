/* jshint esversion: 6 */

const boardBuilder = () => {
  return Array(3).fill(['_','_','_']);
};

class Game {
  constructor() {
    this.board = boardBuilder();
    this.players = ['X', 'O'];
    this.expectedPlayer = _coinToss();
    this._positionMap = {
      1: this.board[0][0],
      2: this.board[0][1],
      3: this.board[0][2],
      4: this.board[1][0],
      5: this.board[1][1],
      6: this.board[1][2],
      7: this.board[2][0],
      8: this.board[2][1],
      9: this.board[2][2]
    };
  }

  _coinToss() {
    const rando = Math.floor(Math.random() * 2);
    return this.players[rando];
  }

  reset() {
    this.board = boardBuilder();
    this.expectedPlayer = _coinToss();
  }

  play(player, position) {
    if (player === this.expectedPlayer) {
      if (_conflictAt(position)) {
        console.log('Sorry, that seat it taken.');
      } else {
        // place player at position
      }
    } else {
      console.log(`Expected first argument to be player ${this.expectedPlayer}. Try again.`);
    }
  }

  _conflictAt(position) {
    return !(this._positionMap[position] === '_');
  }

  _checkForWinner() {

  }

}
