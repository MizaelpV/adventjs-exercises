function findFirstRepeated(gifts) {
    const numbersWatched = new Set();
  
    for (const giftId of gifts) {
      if (numbersWatched.has(giftId)) {
        return giftId;
      }
      numbersWatched.add(giftId);
    }
    return -1;
  }
  
  const giftIds = [2, 1, 3, 5, 3, 2];
  const firstRepeatedId = findFirstRepeated(giftIds);
  
  const giftIds2 = [1, 2, 3, 4];
  const firstRepeatedId2 = findFirstRepeated(giftIds2);
  
  const giftIds3 = [5, 1, 5, 1];
  const firstRepeatedId3 = findFirstRepeated(giftIds3);
  