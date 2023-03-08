import { BoardSize } from "./globalConstant";
import Cell from "./cell";

// Game board class
const GameBoard = () => {
  const board = [];

  // Creat a 3x3 board, each location is a Cell object
  for (let row = 0; row < BoardSize; row++) {
    board[row] = [];
    for (let col = 0; col < BoardSize; col++) {
      board[row].push(Cell());
    }
  }

  // Getter function for the board
  const getBoard = () => {
    return board;
  };

  // Function to print the board to the console
  const printBoard = () => {
    const values = board
      .map((row) => row.map((cell) => cell.getValue()).join(' '))
      .join('\n');
    console.log(values);
  };

  // Place the marker of the active player in desired cell
  const placeMarker = (row, col, player) => {
    board[row][col].setValue(player);
  };

  function checkWinner() {
    // Check rows
    for (let i = 0; i < BoardSize; i++) {
      if (equals3(board[i][0], board[i][1], board[i][2])) {
        return board[i][0].getValue();
      }
    }
    // Check columns
    for (let i = 0; i < BoardSize; i++) {
      if (equals3(board[0][i], board[1][i], board[2][i])) {
        return board[0][i].getValue();
      }
    }
    // Check diagnal
    if (equals3(board[0][0], board[1][1], board[2][2])) {
      return board[1][1].getValue();
    }
    // Check the other diagnal
    if (equals3(board[0][2], board[1][1], board[2][0])) {
      return board[1][1].getValue();
    }
    // Check for tie
    let occupiedSqures = 0;
    for (let i = 0; i < BoardSize; i++) {
      for (let j = 0; j < BoardSize; j++) {
        if (board[i][j].getValue() !== '.') occupiedSqures++;
      }
    }
    if (occupiedSqures === 9) return 'tie'; // All squares are taken up
    return null; // Not a game terminating play
  }

  // Compare if 3 cells have equal values (markers)
  function equals3(a, b, c) {
    const result =
      a.getValue() === b.getValue() &&
      a.getValue() === c.getValue() &&
      a.getValue() !== '.';
    return result;
  }

  // Check is a cell is available for playing
  const isAvailable = (row, col) => {
    if (board[row][col].getValue() === '.') {
      return true;
    }
    return false;
  };

  // Count the number of cells that are avaialble
  const availableCells = () => {
    count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (isAvailable) {
          count++;
        }
      }
    }
    return count;
  };

  return {
    getBoard,
    printBoard,
    placeMarker,
    checkWinner,
    isAvailable,
    availableCells,
  };
};

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

export default GameBoard;
