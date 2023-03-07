// Factory function for creating a GameBoard object
function createGameBoard() {
  let board = ['', '', '', '', '', '', '', '', ''];

  function makeMove(index, symbol) {
    if (board[index] === '') {
      board[index] = symbol;
      return true;
    } else {
      return false;
    }
  }

  function getWinner() {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
        return board[a];
      }
    }

    if (board.every((square) => square !== '')) {
      return 'tie';
    }

    return '';
  }

  function isGameOver() {
    return getWinner() !== '';
  }

  function getBoard() {
    return board;
  }

  return {
    makeMove,
    getWinner,
    isGameOver,
    getBoard,
  };
}

// Factory function for creating a HumanPlayer object
function createHumanPlayer(symbol) {
  function getMove(board) {
    return new Promise((resolve) => {
      let squares = document.querySelectorAll('.square');
      squares.forEach((square, index) => {
        square.addEventListener('click', function handleClick() {
          if (board.makeMove(index, symbol)) {
            squares.forEach((square) =>
              square.removeEventListener('click', handleClick)
            );
            resolve(index);
          }
        });
      });
    });
  }

  return {
    symbol,
    getMove,
  };
}

// Factory function for creating an AIPlayer object
function createAIPlayer(symbol) {
  function getMove(board) {
    let availableMoves = board
      .getBoard()
      .map((square, index) => (square === '' ? index : null))
      .filter((index) => index !== null);
    let bestMove = -1;
    let bestScore = -Infinity;
    for (let i = 0; i < availableMoves.length; i++) {
      let move = availableMoves[i];
      let newBoard = createGameBoard();
      newBoard.makeMove(move, symbol);
      let score = minimax(newBoard, false);
      if (score > bestScore) {
        bestMove = move;
        bestScore = score;
      }
    }
    board.makeMove(bestMove, symbol);
    return bestMove;
  }

  function minimax(board, isMaximizing) {
    if (board.isGameOver()) {
      if (board.getWinner() === symbol) {
        return 1;
      } else if (board.getWinner() !== '') {
        return -1;
      } else {
        return 0;
      }
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      let availableMoves = board
        .getBoard()
        .map((square, index) => (square === '' ? index : null))
        .filter((index) => index !== null);
      for (let i = 0; i < availableMoves.length; i++) {
        let move = availableMoves[i];
        let newBoard = createGameBoard();
        newBoard.makeMove(move, symbol);
        let score = minimax(newBoard, false);
        bestScore = Math.max(bestScore, score);
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      let availableMoves = board
        .getBoard()
        .map((square, index) => (square === '' ? index : null))
        .filter((index) => index !== null);
      for (let i = 0; i < availableMoves.length; i++) {
        let move = availableMoves[i];
        let newBoard = createGameBoard();
        newBoard.makeMove(move, symbol === 'X' ? 'O' : 'X');
        let score = minimax(newBoard, true);
        bestScore = Math.min(bestScore, score);
      }
      return bestScore;
    }
  }

  return {
    symbol,
    getMove,
  };
}

// Factory function for creating a GameController object
function createGameController() {
  let board = createGameBoard();
  let player1 = createHumanPlayer('X');
  let player2 = createAIPlayer('O');
  let currentPlayer = player1;

  async function playGame() {
    // Play a single game
    while (!board.isGameOver()) {
      // Get current player's move
      let move = await currentPlayer.getMove(board);
      // Update UI
      let squares = document.querySelectorAll('.square');
      squares[move].classList.add(currentPlayer.symbol);
      squares[move].removeEventListener('click', () => {});

      // Switch to next player
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    // Display winner
    let winner = board.getWinner();
    if (winner === 'tie') {
      console.log("It's a tie!");
    } else {
      console.log(`The winner is ${winner}!`);
    }
  }

  function resetGame() {
    // Reset game state
    board = createGameBoard();
    currentPlayer = player1;
    // Reset UI
    let squares = document.querySelectorAll('.square');
    squares.forEach((square) => {
      square.classList.remove(player1.symbol, player2.symbol);
      square.addEventListener('click', function handleClick() {
        if (
          board.makeMove(
            Array.from(squares).indexOf(square),
            currentPlayer.symbol
          )
        ) {
          square.classList.add(currentPlayer.symbol);
          square.removeEventListener('click', handleClick);
          currentPlayer = currentPlayer === player1 ? player2 : player1;
          playGame();
        }
      });
    });
  }

  return {
    playGame,
    resetGame,
  };
}

// Factory function for creating a ScreenController object
function createScreenController(gameController) {
  let startButton = document.getElementById('start-button');
  let resetButton = document.getElementById('reset-button');

  // Add event listeners
  startButton.addEventListener('click', gameController.playGame);
  resetButton.addEventListener('click', gameController.resetGame);

  return {};
}

// Create GameController instance and ScreenController instance, and pass GameController instance to ScreenController
let gameController = createGameController();
let screenController = createScreenController(gameController);

// Initialize board
let board = document.getElementById('board');
for (let i = 0; i < 9; i++) {
  let square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('click', function handleClick() {
    if (gameController.playGame) {
      if (board.makeMove(i, 'X')) {
        square.classList.add('X');
        square.removeEventListener('click', handleClick);
        gameController.playGame();
      }
    }
  });
  board.appendChild(square);
}
