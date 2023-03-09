import './style.css';
import GameController from './gameController';
import delay from './delay';

// The ScreenController that presents a view and gets user requests
const ScreenController = async (numGames, players) => {
  let gamePlayed = 0;
  let winnerIndex = 1;

  const playGame = (startPlayerIndex) => {
    console.log("🚀 ~ file: screenController.js:11 ~ playGame ~ startPlayerIndex:", startPlayerIndex)
    const game = GameController(players, startPlayerIndex);

    return new Promise((resolve, reject) => {
      const boardEl = document.querySelector('.board');

      // Redraws the game board in the web page
      const updateScreen = () => {
        boardEl.innerHTML = '';
        const board = game.getBoard();

        for (let row = 0; row < board.length; row++) {
          for (let col = 0; col < board.length; col++) {
            // Creates each cell element
            const cellEl = document.createElement('button');
            cellEl.classList.add('cell');
            cellEl.textContent = board[row][col].getValue();

            // Add data attributes to the cell elements that can be accessed by event handler
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

      // Handles clicks on the board
      // Needs to be ayncs to use the delay function to delay the alerts
      async function clickHandlerBoard(e) {
        const row = e.target.dataset.row;
        const col = e.target.dataset.col;
        let result;

        // Ignore invalid user input
        // When a cell has already been clicked, it's pointer event is disabled
        // Cliked on it results in row and col being undefined
        if (!row || !col) return;

        // Play a valid move
        result = game.playRound(row, col);
        updateScreen();
        if (result) {
          game.resetBoard();
          if (result === 'tie') {
            resolve('Tie!');
          } else {
            winnerIndex = players.indexOf(game.getActivePlayer());
            console.log(
              '🚀 ~ file: screenController.js:67 ~ clickHandlerBoard ~ winnerIndex:',
              winnerIndex
            );
            resolve(`${game.getActivePlayer().type} wins!`);
          }
        }
      }
      boardEl.addEventListener('click', clickHandlerBoard);

      updateScreen();
    });
  };

  let startPlayerIndex = 0;
  while (gamePlayed < numGames) {
    await playGame(startPlayerIndex).then(async (message) => {
      gamePlayed++;
      // Make the loser the start player of the new game
      startPlayerIndex = winnerIndex === 1 ? 0 : 1;
      console.log("🚀 ~ file: screenController.js:87 ~ awaitplayGame ~ startPlayerIndex:", startPlayerIndex)
      console.log(
        '🚀 ~ file: screenController.js:98 ~ ScreenController ~ gamePlayed:',
        gamePlayed
      );
      console.log(
        '🚀 ~ file: screenController.js:98 ~ endPlay.then ~ message:',
        message
      );
      await delay(500);
      alert(message);
      // TODO: add logic so the lose go first next round
    });
  }
  alert('Game Over!');
  // TODO: disable all cells here
  // TODO: end game screen to summarize scores, allow user to play again
};

export default ScreenController;
