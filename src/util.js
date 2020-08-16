export const getRandomNumber = (min, max, fractional = 0) => {
  const randomNumber = min + Math.random() * (max - min);
  return randomNumber.toFixed(fractional);
};

export const getRandomBoolean = () => {
  if (getRandomNumber(0, 1) === `1`) {
    return true;
  } else {
    return false;
  }
};
