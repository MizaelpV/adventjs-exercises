const gifts = ["tren", "oso", "pelota"];
const materials = "tronesa";

const manufacture = (gifts, materials) => {
  const result = gifts.filter((gift) => {
    const giftLetters = gift.split("");
    const giftLettersInMaterials = giftLetters.filter((letter) =>
      materials.includes(letter)
    );
    return giftLetters.length === giftLettersInMaterials.length;
  });
  return result;
};

manufacture(gifts, materials);
