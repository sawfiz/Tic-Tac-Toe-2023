const BoardSize = 3

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

  const isAvailable = (row, col) => {
    if (board[row][col].getValue() === '.') {
      return true;
    }
    return false;
  };

  const availableCells = () => {
    count = 0;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j].getValue() === '.') {
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
    isWinningMove,
    isAvailable,
    availableCells,
  };
};

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
    board.placeMarker(row, col, getActivePlayer().marker);
    board.printBoard();
    if (isEndGame(row, col)) return;
    switchPlayer();
    
    if (getActivePlayer().type === 'computer') {
      if (getActivePlayer().level === 'random') makeRandomPlay();
      if (getActivePlayer().level === 'ai') makeMinimaxPlay();
      board.printBoard();
    }
  };

  // A computer player that plays using the Minimax algorithm
  const makeMinimaxPlay = () => {
    let bestScore = -Infinity;
    let bestRow, bestCol;
    const boardArray = board.getBoard()

    for (let row = 0; row < BoardSize; row++) {
      for (let col = 0; col < BoardSize; col++) {
        if (boardArray[row][col].getValue() === '.') {
          boardArray[row][col].setValue('O');
          const score = minimax(boardArray, false);
          if (score > bestScore) {
            bestScore = score;
            bestRow = row;
            bestCol = col;
            // bestMove = row * BoardSize + col;
          }
          boardArray[row][col].setValue('.');
        }
      }
    }
    // gameBoard.disableSquare(bestMove);
    // return bestMove;
    board.placeMarker(bestRow, bestCol, getActivePlayer().marker);
    if (isEndGame(bestRow, bestCol)) return;
    switchPlayer();
  }

  function minimax(boardArray, isMaximizing) {
    const scores = {
      O: 10,
      tie: 0,
      X: -10,
    };

    const result = checkWinner(boardArray);
    if (result !== null) {
      console.log("🚀 ~ file: index.js:222 ~ minimax ~ scores[result]:", scores[result])
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < BoardSize; i++) {
        for (let j = 0; j < BoardSize; j++) {
          if (boardArray[i][j].getValue() === '.') {
            boardArray[i][j].setValue('O');
            const score = minimax(boardArray, false);
            bestScore = Math.max(score, bestScore);
            boardArray[i][j].setValue('.');
          }
        }
      }
      return bestScore;
      // eslint-disable-next-line no-else-return
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < BoardSize; i++) {
        for (let j = 0; j < BoardSize; j++) {
          if (boardArray[i][j].getValue() === '.') {
            boardArray[i][j].setValue('X');
            const score = minimax(boardArray, true);
            bestScore = Math.min(score, bestScore);
            boardArray[i][j].setValue('.');
          }
        }
      }
      return bestScore;
    }
  }


  function checkWinner(boardArray) {
    // Check rows
    for (let i = 0; i < BoardSize; i++) {
      if (equals3(boardArray[i][0], boardArray[i][1], boardArray[i][2])) {
        return boardArray[i][0].getValue();
      }
    }
    // Check columns
    for (let i = 0; i < boardArray; i++) {
      if (equals3(boardArray[0][i], boardArray[1][i], boardArray[2][i])){
        return boardArray[0][i].getValue();
      }
    }
    // Check diagnal
    if (equals3(boardArray[0][0], boardArray[1][1], boardArray[2][2])) {
      return boardArray[1][1].getValue();
    }
    // Check the other diagnal
    if (equals3(boardArray[0][2], boardArray[1][1], boardArray[2][0])) {
      return boardArray[1][1].getValue();
    }
    // Check for tie
    let occupiedSqures = 0;
    for (let i = 0; i < BoardSize; i++) {
      for (let j = 0; j < BoardSize; j++) {
        if (boardArray[i][j].getValue() !== '.') occupiedSqures++;
      }
    }
    if (occupiedSqures === 9) return 'tie'; // All squares are taken up
    return null; // Not a game terminating play
  }


  function equals3(a, b, c) {
    result = a.getValue() === b.getValue() && a.getValue() === c.getValue() && a.getValue() !== '.';    
    return result;
  }


  // A computer player that plays random cells
  const makeRandomPlay= () => {
    let row, col;
    // Try until computer finds a valid cell to play
    do {
      row = Math.floor(Math.random() * 3);
      col = Math.floor(Math.random() * 3);
    } while (!board.isAvailable(row, col));

    board.placeMarker(row, col, getActivePlayer().marker);
    if (isEndGame(row, col)) return;
    switchPlayer();
  }

  // A game ends if there is a winner or if there is no more space to play
  const isEndGame = (row, col) => {
    if (board.isWinningMove(row, col)) {
      alert(`${getActivePlayer().name} wins!`);
      return true;
    }
    if (board.availableCells() === 0) {
      alert('Tie');
      return true;
    }
  }

  return { playRound, getBoard: board.getBoard };
};

const ScreenController = () => {
  const game = GameController();
  const boardEl = document.querySelector('.board');

  const updateScreen = () => {
    boardEl.innerHTML = '';

    const board = game.getBoard();
    for (let row = 0; row < board.length; row++) {
      // const rowEl = document.createElement('div')
      // boardEl.appendChild(rowEl)
      for (let col = 0; col < board.length; col++) {
        const cellEl = document.createElement('button');
        cellEl.classList.add('cell');
        cellEl.textContent = board[row][col].getValue();
        cellEl.dataset.row = row;
        cellEl.dataset.col = col;

        // Style and disable played cells
        if (board[row][col].getValue() === 'X') {
          cellEl.classList.add('player-1');
          cellEl.disabled = true;
        }
        if (board[row][col].getValue() === 'O') {
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
