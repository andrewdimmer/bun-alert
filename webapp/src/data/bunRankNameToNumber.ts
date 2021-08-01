export const getBunRankNumberFromBunRankName = (bunRank: BunRanks) => {
  return {
    "Baby Bun": 1,
    "King Bun": 2,
    "Queen Bun": 3,
    "Princess Bun": 4,
    "Prince Bun": 5,
    "Peasent Bun": 6,
  }[bunRank];
};
