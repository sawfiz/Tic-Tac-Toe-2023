import './style.css';
import GameController from './gameController';
import delay from './delay';

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

    const player1El = document.createElement('div');
    player1El.classList.add('results-heading');
    player1El.innerText = players[0].type;
    resultsEl.appendChild(player1El);

    const tieEl = document.createElement('div');
    tieEl.classList.add('results-heading');
    tieEl.innerText = 'Tie';
    resultsEl.appendChild(tieEl);

    const player2El = document.createElement('div');
    player2El.classList.add('results-heading');
    player2El.innerText = players[1].type;
    resultsEl.appendChild(player2El);

    const player1ScoreEl = document.createElement('div');
    player1ScoreEl.classList.add('results-score');
    player1ScoreEl.innerText = scores[0];
    resultsEl.appendChild(player1ScoreEl);

    const tieScoreEl = document.createElement('div');
    tieScoreEl.classList.add('results-score');
    tieScoreEl.innerText = scores[2];
    resultsEl.appendChild(tieScoreEl);

    const player2ScoreEl = document.createElement('div');
    player2ScoreEl.classList.add('results-score');
    player2ScoreEl.innerText = scores[1];
    resultsEl.appendChild(player2ScoreEl);
  };

  playMultipleGames(numGames, players);
};

export default ScreenController;
