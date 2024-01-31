function findFirstRepeatedTS(gifts) {
    var numbersWatched = new Set();
    for (var _i = 0, gifts_1 = gifts; _i < gifts_1.length; _i++) {
        var giftId = gifts_1[_i];
        if (numbersWatched.has(giftId)) {
            return giftId;
        }
        numbersWatched.add(giftId);
    }
    return -1;
}
var giftIdsTS = [2, 1, 3, 5, 3, 2];
var firstRepeatedIdTS = findFirstRepeatedTS(giftIdsTS);
var giftIds2TS = [1, 2, 3, 4];
var firstRepeatedId2TS = findFirstRepeated(giftIds2);
var giftIds3TS = [5, 1, 5, 1];
var firstRepeatedId3TS = findFirstRepeated(giftIds3);
