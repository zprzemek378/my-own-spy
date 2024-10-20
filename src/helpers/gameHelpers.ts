const shuffle = (array: number[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

export const selectIndexesOfSpies = (
  totalPlayers: number,
  totalSpies: number
) => {
  const playerIndexes = shuffle(
    Array.from({ length: totalPlayers }, (_, index) => index)
  );

  return playerIndexes.slice(0, totalSpies);
};
