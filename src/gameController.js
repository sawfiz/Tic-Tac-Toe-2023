import GameBoard from './gameBoard';
import makeRandomPlay from './ramdomPlay';
import makeMinimaxPlay from './miniMax';

// Game controller where the game playing logic is
const GameController = (players, startPlayerIndex) => {
  const board = GameBoard();
  board.printBoard();

  let activePlayer = players[startPlayerIndex];
  console.log(activePlayer);

  const getActivePlayer = () => activePlayer;

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const makeComputerPlay = () => {
    let result;
    // Computer player plays
    if (activePlayer.type === 'random') {
      result = makeRandomPlay(board, activePlayer.marker);
      board.printBoard();
      if (result) return result;
      switchPlayer();
    }

    if (activePlayer.type === 'ai') {
      result = makeMinimaxPlay(board, activePlayer.marker);
      board.printBoard();
      if (result) return result;
      switchPlayer();
    }
  };

  // Make a play in a chosen cell
  // If there is a computer player, the computer makes a play too
  const playRound = (row, col) => {
    let result;

    // Play the human player play
    console.log("human player plays");
    board.placeMarker(row, col, activePlayer.marker);
    board.printBoard();

    // Check for end of game and game result
    result = board.checkWinner();
    if (result) return result;

    switchPlayer();

    // Computer player plays
    console.log("Computer plays");
    result = makeComputerPlay();
    if (result) return result;
  };

  // If computer player is player 1, make a computer play first
  if (activePlayer.type !== 'human') {
    console.log("Computer 1st plays");
    makeComputerPlay();
  }

  return { playRound, getBoard: board.getBoard,  resetBoard: board.resetBoard, getActivePlayer };
};

export default GameController;
