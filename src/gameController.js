import GameBoard from './gameBoard';
import makeRandomPlay from './ramdomPlay';
import makeMinimaxPlay from './miniMax';

// Game controller where the game playing logic is
const GameController = (
  playerOneName = 'Player One',
  playerTwoName = 'Player Two'
) => {
  const board = GameBoard();
  board.printBoard();

  const players = [
    { name: playerOneName, marker: 'X', type: 'human', level: 'none' },
    { name: playerTwoName, marker: 'O', type: 'computer', level: 'ai' },
  ];

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  // Make a play in a chosen cell
  // If there is a computer player, the computer makes a play too
  const playRound = (row, col) => {
    let result;

    // Play the human player play
    board.placeMarker(row, col, activePlayer.marker);
    board.printBoard();

    // Check for end of game and game result
    result = board.checkWinner();
    if (result) return result;

    switchPlayer();

    // Computer player plays
    if (getActivePlayer().type === 'computer') {
      if (activePlayer.level === 'random') {
        result = makeRandomPlay(board, activePlayer.marker);
        switchPlayer();
      }

      if (activePlayer.level === 'ai') {
        result = makeMinimaxPlay(board, activePlayer.marker);
        switchPlayer();
      }

      board.printBoard();
      if (result) return result;
    }
  };

  return { playRound, getBoard: board.getBoard, getActivePlayer };
};

export default GameController;
