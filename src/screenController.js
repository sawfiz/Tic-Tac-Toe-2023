import './style.css';
import GameController from './gameController';
import delay from './delay';
import { Players } from './players';
import oIcon from './images/O.png';
import xIcon from './images/X.png';

// The ScreenController that presents a view and gets user requests
const ScreenController = async () => {
  const playersObj = Players();
  let players;
  let numGames;
  let winnerIndex = 1;
  let scores = [0, 0, 0]; // Scores for player 1, player 2, tie
  const boardEl = document.querySelector('.board');
  const resultsEl = document.querySelector('.results');

  const playGame = (players, startPlayerIndex) => {
    let game = GameController(players, startPlayerIndex);

    return new Promise((resolve) => {
      // Redraws the game board in the web page
      const updateScreen = () => {
        boardEl.innerHTML = '';
        const board = game.getBoard();

        for (let row = 0; row < board.length; row++) {
          for (let col = 0; col < board.length; col++) {
            // Creates each cell element
            const cellEl = document.createElement('div');
            cellEl.classList.add('cell');
            // cellEl.textContent = board[row][col].getValue();

            // Add data attributes to the cell elements that can be accessed by event handler
            cellEl.dataset.row = row;
            cellEl.dataset.col = col;

            const marker = board[row][col].getValue();
            const markerEl = document.createElement('img');
            // markerEl.src = marker === 'X' ? xIcon : oIcon;
            markerEl.classList.add('piece');
            cellEl.appendChild(markerEl);

            // Style and disable played cells
            if (marker === 'X') {
              markerEl.src = xIcon;
              // Disables click, no more hover effect, cursor becomes default
              cellEl.style.pointerEvents = 'none';
            }
            if (marker === 'O') {
              markerEl.src = oIcon;
              // Disables click, no more hover effect, cursor becomes default
              cellEl.style.pointerEvents = 'none';
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
        updateScreen();

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
      updateScreen();
      boardEl.addEventListener('click', clickHandlerBoard);
    });
  };

  const playMultipleGames = (numGames, players) => {
    let gameIndex = 0;
    // updateScoresDisplay();

    const playNextGame = (startPlayerIndex) => {
      return playGame(players, startPlayerIndex).then(async (winnerIndex) => {
        // update the scores
        scores[winnerIndex] += 1;
        updateScoresDisplay();
        const gameMsgEl = document.querySelector('.game-message');

        // display result of each game
        if (winnerIndex < 2) {
          gameMsgEl.innerText = `${players[winnerIndex].name} wins!`;
        } else {
          gameMsgEl.innerText = 'Tie!';
        }

        gameMsgEl.showModal();
        setTimeout(() => {
          gameMsgEl.close();
        }, 1000);
        await delay(1000);

        // check if all games have been played
        if (gameIndex >= numGames - 1) {
          // alert('Game Over!');
          const gameOverModal = document.querySelector('.game-over-modal');
          const restartBtn = document.querySelector('#restart-game');
          gameOverModal.showModal();
          restartBtn.addEventListener('click', (event) => {
            event.preventDefault();
            gameOverModal.close();
            // game();
            window.location.reload();
          });
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

  const initScoresDisplay = () => {
    const player1NameEl = document.querySelector('#player1-name');
    player1NameEl.innerText = players[0].name;
    const player2NameEl = document.querySelector('#player2-name');
    player2NameEl.innerText = players[1].name;

    const player1TypeEl = document.querySelector('#player1-type');
    player1TypeEl.innerText = players[0].type;
    const player2TypeEl = document.querySelector('#player2-type');
    player2TypeEl.innerText = players[1].type;

    const player1MarkerEl = document.querySelector('#player1-marker');
    player1MarkerEl.src = players[0].marker === 'X' ? xIcon : oIcon;

    const player2MarkerEl = document.querySelector('#player2-marker');
    player2MarkerEl.src = players[1].marker === 'X' ? xIcon : oIcon;
  };

  const updateScoresDisplay = () => {
    const player1ScoreEl = document.querySelector('#player1-score');
    player1ScoreEl.innerHTML = scores[0];
    const player2ScoreEl = document.querySelector('#player2-score');
    player2ScoreEl.innerHTML = scores[1];
    const boardFootEl = document.querySelector('.board-foot');
    boardFootEl.innerHTML = 'Ties: ' + scores[2];
  };

  // Game setup modal
  const gameSetupModal = document.querySelector('.game-setup-modal');
  const startBtn = document.querySelector('#start-game');

  gameSetupModal.showModal();
  startBtn.addEventListener('click', (e) => {
    e.preventDefault();

    playersObj.setPlayers([
      {
        name: document.querySelector('#player1-name-input').value,
        marker: 'X',
        type: 'human',
      },
      {
        name: document.querySelector('#player2-name-input').value,
        marker: 'O',
        type: document.querySelector('#player2-type-input').value,
      },
    ]);
    players = playersObj.getPlayers();
    numGames = document.querySelector('#number-of-games').value;
    gameSetupModal.close();

    initScoresDisplay();

    playMultipleGames(numGames, players);
  });
};

export default ScreenController;
