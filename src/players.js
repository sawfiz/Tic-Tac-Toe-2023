const Players = () => {
  let players = [];

  const setPlayers = (values) => {
    players = values;
  };

  const getPlayers = () => players;

  return {setPlayers, getPlayers};
};

export { Players };
