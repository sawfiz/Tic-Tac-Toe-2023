// Global constants
const BoardSize = 3;

// Global function
function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


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

  function equals3(a, b, c) {
    result =
      a.getValue() === b.getValue() &&
      a.getValue() === c.getValue() &&
      a.getValue() !== '.';
    return result;
  }

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
    checkWinner,
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
    { name: playerTwoName, marker: 'O', type: 'computer', level: 'random' },
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
    board.placeMarker(row, col, activePlayer.marker);
    board.printBoard();
    result = board.checkWinner();
    console.log('🚀 ~ file: index.js:144 ~ playRound ~ result:', result);
    if (result)  return result;
    switchPlayer();

    if (getActivePlayer().type === 'computer') {
      if (activePlayer.level === 'random') {
        result = makeRandomPlay();
        console.log('🚀 ~ file: index.js:150 ~ playRound ~ result:', result);
      }

      if (activePlayer.level === 'ai') makeMinimaxPlay();

      board.printBoard();
      if (result) return result;
    }
  };

  // A computer player that plays using the Minimax algorithm
  const makeMinimaxPlay = () => {
    let bestScore = -Infinity;
    let bestRow, bestCol;

    for (let row = 0; row < BoardSize; row++) {
      for (let col = 0; col < BoardSize; col++) {
        if (board.isAvailable(row, col)) {
          board.placeMarker(row, col, activePlayer.marker);
          const score = minimax(board, false);
          if (score > bestScore) {
            bestScore = score;
            bestRow = row;
            bestCol = col;
          }
          board.placeMarker(row, col, '.');
        }
      }
    }
    board.placeMarker(bestRow, bestCol, activePlayer.marker);
    if (isEndGame(bestRow, bestCol)) return activePlayer;
    switchPlayer();
  };

  function minimax(board, isMaximizing) {
    const scores = {
      O: 10,
      tie: 0,
      X: -10,
    };

    const result = board.checkWinner();
    if (result !== null) {
      return scores[result];
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < BoardSize; i++) {
        for (let j = 0; j < BoardSize; j++) {
          if (board.isAvailable(i, j)) {
            board[i][j].setValue('O');
            const score = minimax(board, false);
            bestScore = Math.max(score, bestScore);
            board[i][j].setValue('.');
          }
        }
      }
      return bestScore;
      // eslint-disable-next-line no-else-return
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < BoardSize; i++) {
        for (let j = 0; j < BoardSize; j++) {
          if (board.isAvailable(i, j)) {
            board[i][j].setValue('X');
            const score = minimax(board, true);
            bestScore = Math.min(score, bestScore);
            board[i][j].setValue('.');
          }
        }
      }
      return bestScore;
    }
  }

  // A computer player that plays random cells
  const makeRandomPlay = () => {
    let row, col;
    let result;
    // Try until computer finds a valid cell to play
    do {
      row = Math.floor(Math.random() * 3);
      col = Math.floor(Math.random() * 3);
    } while (!board.isAvailable(row, col));

    board.placeMarker(row, col, activePlayer.marker);
    result = board.checkWinner();
    if (result) return result;
    switchPlayer();
  };

  return { playRound, getBoard: board.getBoard, getActivePlayer };
};

const ScreenController = (numGames) => {
  let gameCount = 0;
  let endGame = false;

  const playNextGame = () => {
    gameCount++;
    console.log(
      '🚀 ~ file: index.js:383 ~ playNextGame ~ gameCount:',
      gameCount
    );

    if (gameCount <= numGames) {
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

            // If game over, disable all cells
            if (endGame) {
              cellEl.disabled = true;
              cellEl.style.cursor = 'default';
            }
            boardEl.appendChild(cellEl);
          }
        }
      };

      async function clickHandlerBoard(e) {
        const row = e.target.dataset.row;
        const col = e.target.dataset.col;
        let result;

        // Skip invalid user input
        // When a cell has already been clicked, it's pointer event is disabled
        // Cliked on it results in row and col being undefined
        if (!row || !col) return;

        // Play a valid move
        result = game.playRound(row, col);
        if (result) {
          endGame = true;
          updateScreen();
          if (result === 'tie') {
            await delay(100);
            alert('Tie!');
          } else {
            await delay(100);
            alert(`${game.getActivePlayer().name} wins!`);
          }
        }
        updateScreen();
      };
      boardEl.addEventListener('click', clickHandlerBoard);

      updateScreen();
    } else {
      alert(`You have played ${numGames} games.  Thanks for playing!`);
    }
  };

  playNextGame();
};

// Prompt user for number of games to play
// let numGames = parseInt(prompt("How many games do you want to play?"))

// Create ScreenController instance and play gam

const numGames = parseInt(prompt('How many games do you want to play?'));
ScreenController(numGames);
