import { BoardSize } from "./globalConstant";
import GameBoard from "./gameBoard";

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
        result = makeRandomPlay();
      }

      if (activePlayer.level === 'ai') {
        result = makeMinimaxPlay();
      }

      board.printBoard();
      if (result) return result;
    }
  };

  // A computer player that plays using the Minimax algorithm
  const makeMinimaxPlay = () => {
    let bestScore = -Infinity;
    let bestRow, bestCol;
    let result;

    // Go through all avaialble cells to find the best posible move
    for (let row = 0; row < BoardSize; row++) {
      for (let col = 0; col < BoardSize; col++) {
        if (board.isAvailable(row, col)) {
          // Try to play an available cell
          board.placeMarker(row, col, activePlayer.marker);
          // Recursively get the score of this play
          const score = minimax(board, false);
          // Record if it is a better move
          if (score > bestScore) {
            bestScore = score;
            bestRow = row;
            bestCol = col;
          }
          // Reset the cell
          board.placeMarker(row, col, '.');
        }
      }
    }

    // Play the best move found
    board.placeMarker(bestRow, bestCol, activePlayer.marker);

    // If the games with a winner of tie, return result
    result = board.checkWinner();
    if (result) return result;

    // Switch player and wait for next play
    switchPlayer();
  };

  // Recursive minimax algorithm
  function minimax(board, isMaximizing) {
    const scores = {
      O: 10,
      tie: 0,
      X: -10,
    };

    // Terminating condition for the recursive algorithm
    const result = board.checkWinner();
    if (result !== null) {
      return scores[result];
    }

    // Alternate between Min and Max players
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < BoardSize; i++) {
        for (let j = 0; j < BoardSize; j++) {
          if (board.isAvailable(i, j)) {
            board.placeMarker(i, j, 'O');
            const score = minimax(board, false);
            bestScore = Math.max(score, bestScore);
            board.placeMarker(i, j, '.');
          }
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < BoardSize; i++) {
        for (let j = 0; j < BoardSize; j++) {
          if (board.isAvailable(i, j)) {
            board.placeMarker(i, j, 'X');
            const score = minimax(board, true);
            bestScore = Math.min(score, bestScore);
            board.placeMarker(i, j, '.');
          }
        }
      }
      return bestScore;
    }
  }

  // A computer player that plays at random cells
  const makeRandomPlay = () => {
    let row, col;
    let result; // Result from checkWinner, can be 'X', 'O', 'Tie', or null

    // Try until computer finds a valid cell to play
    do {
      row = Math.floor(Math.random() * 3);
      col = Math.floor(Math.random() * 3);
    } while (!board.isAvailable(row, col));

    // Play a valid move
    board.placeMarker(row, col, activePlayer.marker);
    result = board.checkWinner();

    // Getting a valid result means a game is ended with a winner or a tie
    if (result) return result;

    // Otherwise, switch active player and continue the game
    switchPlayer();
  };

  return { playRound, getBoard: board.getBoard, getActivePlayer };
};

export default GameController;
