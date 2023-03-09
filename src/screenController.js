import './style.css';
import GameController from './gameController';
import delay from './delay';

// The ScreenController that presents a view and gets user requests
const ScreenController = async (numGames, players) => {
  let gamePlayed = 0;

  const playGame = () => {
    const game = GameController(players);

    return new Promise(async (resolve, reject) => {
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
        if (result) {

          updateScreen();
          if (result === 'tie') {
            await delay(100);
            alert('Tie!');
          } else {
            await delay(100);
            alert(`${game.getActivePlayer().type} wins!`);
          }
          game.resetBoard();
          resolve('game over');
        }
        updateScreen();
      }
      boardEl.addEventListener('click', clickHandlerBoard);

      updateScreen();
    });
  };

  while (gamePlayed < numGames) {
    await playGame().then((message) => {
      gamePlayed++;
      console.log(
        '🚀 ~ file: screenController.js:98 ~ ScreenController ~ numGames:',
        numGames
      );
      console.log(
        '🚀 ~ file: screenController.js:98 ~ ScreenController ~ gamePlayed:',
        gamePlayed
      );
      console.log(
        '🚀 ~ file: screenController.js:98 ~ endPlay.then ~ message:',
        message
      );
    });
  }
  alert("Game Over!")
};

export default ScreenController;
