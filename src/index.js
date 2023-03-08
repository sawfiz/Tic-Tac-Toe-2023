import { Players } from './players';
import ScreenController from './screenController';

const players = Players();
players.setPlayers([
  { name: 'playerOneName', marker: 'X', type: 'ai' },
  { name: 'playerTwoName', marker: 'O', type: 'human' },
]);

// Prompt user for number of games to play
// const numGames = parseInt(prompt('How many games do you want to play?'));

// Create ScreenController instance and play game
ScreenController(1, players.getPlayers());
