import { BoardSize } from './globalConstant';

// A computer player that plays using the Minimax algorithm
const makeMinimaxPlay = (board, marker) => {
  let bestScore = -Infinity;
  let bestRow, bestCol;
  let result;
  const oppositeMarker = marker === 'O' ? 'X' : 'O';

  // Go through all avaialble cells to find the best posible move
  for (let row = 0; row < BoardSize; row++) {
    for (let col = 0; col < BoardSize; col++) {
      if (board.isAvailable(row, col)) {
        // Try to play an available cell
        board.placeMarker(row, col, marker);
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
  board.placeMarker(bestRow, bestCol, marker);

  // If the games with a winner of tie, return result
  result = board.checkWinner();
  if (result) return result;

  // Recursive minimax algorithm
  function minimax(board, isMaximizing) {
    // Terminating condition for the recursive algorithm
    const result = board.checkWinner();
    if (result !== null) {
      if (result === marker) {
        return 10;
      } 
      if (result === 'tie') {
        return 0;
      } 
      if (result === oppositeMarker) {
        return -10;
      } 
    }

    // Alternate between Min and Max players
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < BoardSize; i++) {
        for (let j = 0; j < BoardSize; j++) {
          if (board.isAvailable(i, j)) {
            board.placeMarker(i, j, marker);
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
            board.placeMarker(i, j, oppositeMarker);
            const score = minimax(board, true);
            bestScore = Math.min(score, bestScore);
            board.placeMarker(i, j, '.');
          }
        }
      }
      return bestScore;
    }
  }
};

export default makeMinimaxPlay;
