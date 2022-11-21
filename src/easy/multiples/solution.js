function multiples(number, howManyTimes) {
  const result = [number];
  let num = number;
  for (let i = 1; i < howManyTimes; i++) {
    num += number;
    result.push(num);
  }
  return result;
}
console.log(multiples(7, 5));
