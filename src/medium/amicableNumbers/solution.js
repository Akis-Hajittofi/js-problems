const findSumDivisors = (number) => {
  let sum = 0;
  for (let i = 0; i < number; i++) {
    if (number % i === 0) {
      sum += i;
    }
  }
  return sum;
};

const amicableNumbers = () => {
  for (let i = 1; i < 100000; i++) {
    sum = findSumDivisors(i);
    sum2 = findSumDivisors(sum);
    if (i === sum2 && i != sum) {
      console.log(i + " and " + sum + " are friends");
    }
  }
};

amicableNumbers();
