// Cell class
// Each playable location on the board is a cell object
const Cell = () => {
  let value = '.';

  const setValue = (marker) => {
    value = marker;
  };

  const getValue = () => value;

  return { setValue, getValue };
};

// Game board class
const GameBoard = () => {
  const board = [];

  // Creat a 3x3 board, each location is a Cell object
  for (let row = 0; row < 3; row++) {
    board[row] = [];
    for (let col = 0; col < 3; col++) {
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

  // Check if the latest move is the winning move
  const isWinningMove = (row, col) => {
    const player = board[row][col].getValue();
    console.log(player);
    const size = board.length;
  
    // Check row
    let count = 0;
    for (let i = 0; i < size; i++) {
      if (board[row][i].getValue() === player) {
        count++;
        if (count === size) {
          return true;
        }
      } else {
        count = 0;
      }
    }
  
    // Check column
    count = 0;
    for (let i = 0; i < size; i++) {
      if (board[i][col].getValue() === player) {
        count++;
        if (count === size) {
          return true;
        }
      } else {
        count = 0;
      }
    }
  
    // Check diagonal from top left to bottom right
    if (row === col) {
      count = 0;
      for (let i = 0; i < size; i++) {
        if (board[i][i].getValue() === player) {
          count++;
          if (count === size) {
            return true;
          }
        } else {
          count = 0;
        }
      }
    }
  
    // Check diagonal from top right to bottom left
    if (row === size - col - 1) {
      count = 0;
      for (let i = 0; i < size; i++) {
        if (board[i][size - i - 1].getValue() === player) {
          count++;
          if (count === size) {
            return true;
          }
        } else {
          count = 0;
        }
      }
    }
  
    // No winning condition found
    return false;
  };
  

  return { getBoard, printBoard, placeMarker, isWinningMove };
};

const GameController = (
  playerOneName = 'Player One',
  playerTwoName = 'Player Two'
) => {
  const board = GameBoard();
  board.printBoard();

  const players = [
    { name: playerOneName, marker: 'X' },
    { name: playerTwoName, marker: 'O' },
  ];

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0] 
  }

  const playRound = (row, col) => {
    board.placeMarker(row, col, getActivePlayer().marker);
    board.printBoard();
    if (board.isWinningMove(row, col)) {
      alert(`${getActivePlayer().name} wins!`)
    }
    switchPlayer();
  };

  return { playRound };
};

const game = GameController();
