function getRandomArbitrary(min, max) {
  min++;
  return Math.floor(Math.random() * (max - min) + min);
}

console.log(getRandomArbitrary(100, 1000));
