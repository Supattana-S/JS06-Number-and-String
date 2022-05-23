const randomNumber = (min, max) => {
  //[0, 1) * (3 - 1) => [0, 2) +1 => [1, 3)
  return Math.random() * (max - min) + min;
};

console.log(randomNumber(2, 5));
