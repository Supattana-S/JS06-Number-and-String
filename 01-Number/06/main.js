const randomNumber = (min, max) => {
  return Math.random() * (max - min) + min;
};

console.log(randomNumber(2, 5));
