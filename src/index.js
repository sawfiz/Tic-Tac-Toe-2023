import { Players } from './players';
import ScreenController from './screenController';

const players = Players();

// TODO: Add a form for game set up
// Player attributes
// Number of games to play

players.setPlayers([
  { name: 'playerOneName', marker: 'X', type: 'human' },
  { name: 'playerTwoName', marker: 'O', type: 'human' },
]);

// Prompt user for number of games to play
// const numGames = parseInt(prompt('How many games do you want to play?'));

// Create ScreenController instance and play game
ScreenController(3, players.getPlayers());
