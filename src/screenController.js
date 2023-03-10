import './style.css';
import GameController from './gameController';
import delay from './delay';
import createElement from './createElement';

// The ScreenController that presents a view and gets user requests
const ScreenController = async (numGames, players) => {
  let winnerIndex = 1;
  let scores = [0, 0, 0]; // Scores for player 1, player 2, tie
  const boardEl = document.querySelector('.board');
  const resultsEl = document.querySelector('.results');

  const playGame = (players, startPlayerIndex) => {
    console.log(
      '🚀 ~ file: screenController.js:11 ~ playGame ~ startPlayerIndex:',
      startPlayerIndex
    );
    let game = GameController(players, startPlayerIndex);

    return new Promise((resolve) => {
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
        // Error handling for is the game previously created is already handled.
        if (game === null) return;

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
            // Terminate this game.  This causes some issues with Promise
            // Error message in console. But the game runs fine.
            game = null;
            resolve(2); // Index of Tie is Scores is 2
          } else {
            winnerIndex = players.indexOf(game.getActivePlayer());
            // Terminate this game.  This causes some issues with Promise
            // Error message in console. But the game runs fine.
            game = null;
            resolve(winnerIndex);
          }
        }
      }
      boardEl.addEventListener('click', clickHandlerBoard);

      updateScreen();
    });
  };

  const playMultipleGames = (numGames, players) => {
    let gameIndex = 0;
    updateScoresDisplay();

    const playNextGame = (startPlayerIndex) => {
      return playGame(players, startPlayerIndex).then(async (winnerIndex) => {
        // update the scores
        scores[winnerIndex] += 1;
        updateScoresDisplay();

        // display result of each game
        await delay(100);
        if (winnerIndex < 2) {
          alert(`${players[winnerIndex].type} wins!`);
        } else {
          alert('Tie!');
        }

        // check if all games have been played
        if (gameIndex >= numGames - 1) {
          alert('Game Over!');
          return scores;
        }

        // otherwise, determine who goes first next and play the next game
        gameIndex += 1;
        const nextStartPlayerIndex = winnerIndex === 1 ? 0 : 1;
        return playNextGame(nextStartPlayerIndex);
      });
    };

    // start the first game
    return playNextGame(0);
  };

  const updateScoresDisplay = () => {
    resultsEl.innerHTML = '';

    resultsEl.appendChild(
      createElement('div', ['results-heading'], {}, players[0].type)
    );
    resultsEl.appendChild(createElement('div', ['results-heading'], {}, 'Tie'));
    resultsEl.appendChild(
      createElement('div', ['results-heading'], {}, players[1].type)
    );

    for (let i = 0; i < scores.length; i++) {
      resultsEl.appendChild(
        createElement('div', ['results-score'], {}, scores[i])
      );
    }
  };

  playMultipleGames(numGames, players);
};

export default ScreenController;
