function findFirstRepeatedTS(gifts: number[]) {
  const numbersWatched = new Set<number>();

  for (const giftId of gifts) {
    if (numbersWatched.has(giftId)) {
      return giftId;
    }
    numbersWatched.add(giftId);
  }
  return -1;
}

const giftIdsTS = [2, 1, 3, 5, 3, 2];
const firstRepeatedIdTS = findFirstRepeatedTS(giftIdsTS);

const giftIds2TS = [1, 2, 3, 4];
const firstRepeatedId2TS = findFirstRepeatedTS(giftIds2TS);

const giftIds3TS = [5, 1, 5, 1];
const firstRepeatedId3TS = findFirstRepeatedTS(giftIds3TS);
