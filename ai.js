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
    let index = parseInt(prompt('Enter a move (0-8):'));
    while (!board.makeMove(index, symbol)) {
      index = parseInt(prompt('Invalid move. Enter a move (0-8):'));
    }
    return index;
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

  function playGame() {
    // Play a single game
    while (!board.isGameOver()) {
      // Get current player's move
      let move = currentPlayer.getMove(board);

      // Display board
      console.log(
        board
          .getBoard()
          .map((square) => (square === '' ? ' ' : square))
          .join(' | ')
      );

      // Switch to next player
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    }

    // Display final board
    console.log(
      board
        .getBoard()
        .map((square) => (square === '' ? ' ' : square))
        .join(' | ')
    );

    // Display winner
    let winner = board.getWinner();
    if (winner === 'tie') {
      console.log("It's a tie!");
    } else {
      console.log(`The winner is ${winner}!`);
    }
  }

  return {
    playGame,
  };
}

// Create GameController instance and play game
let gameController = createGameController();
gameController.playGame();
