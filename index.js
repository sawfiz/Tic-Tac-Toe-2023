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

  const placeMarker = (row, col, player) => {
    board[row][col].setValue(player);
  };

  return { getBoard, printBoard, placeMarker };
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
    switchPlayer();
  };

  return { playRound };
};

const game = GameController();
