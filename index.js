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
    console.log('🚀 ~ file: index.js:48 ~ isWinningMove ~ row:', row);
    console.log('🚀 ~ file: index.js:48 ~ isWinningMove ~ col:', col);
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
      console.log('hi');
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
    // console.log("🚀 ~ file: index.js:98 ~ isWinningMove ~ row:", row)
    // console.log("🚀 ~ file: index.js:97 ~ isWinningMove ~ size - col - 1:", size - col - 1)
    // if (row === (size - col - 1)) {
    // if (row === 0 || col === 2) {
    // if (true) {
    // console.log('ji');
    count = 0;
    for (let i = 0; i < size; i++) {
      if (board[i][size - i - 1].getValue() === player) {
        count++;
        console.log(count);
        if (count === size) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    // }

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
    { name: playerOneName, marker: 1 },
    { name: playerTwoName, marker: 2 },
  ];

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const playRound = (row, col) => {
    board.placeMarker(row, col, getActivePlayer().marker);
    board.printBoard();
    if (board.isWinningMove(row, col)) {
      alert(`${getActivePlayer().name} wins!`);
    }
    switchPlayer();
  };

  return { playRound, getBoard: board.getBoard };
};

const ScreenController = () => {
  const game = GameController();
  const boardEl = document.querySelector('.board');

  const updateScreen = () => {
    boardEl.innerHTML = '';

    const board = game.getBoard();
    console.log(board);
    for (let row = 0; row < board.length; row++) {
      // const rowEl = document.createElement('div')
      // boardEl.appendChild(rowEl)
      for (let col = 0; col < board.length; col++) {
        const cellEl = document.createElement('button');
        cellEl.classList.add('cell');
        cellEl.textContent = board[row][col].getValue();
        cellEl.dataset.row = row;
        cellEl.dataset.col = col;
        if (board[row][col].getValue() === 1) {
          cellEl.classList.add('player-1');
          cellEl.disabled = true;
        }
        if (board[row][col].getValue() === 2) {
          cellEl.classList.add('player-2');
          cellEl.disabled = true;
        }
        boardEl.appendChild(cellEl);
      }
    }
  };

  const clickHandlerBoard = (e) => {
    const row = e.target.dataset.row;
    const col = e.target.dataset.col;

    // Skip invalid user input
    // When a cell has already been clicked, it's pointer event is disabled
    // Cliked on it results in row and col being undefined
    if (!row || !col) return;

    // Play a valid move
    game.playRound(row, col);
    updateScreen();
  };
  boardEl.addEventListener('click', clickHandlerBoard);

  updateScreen();
};

ScreenController();
