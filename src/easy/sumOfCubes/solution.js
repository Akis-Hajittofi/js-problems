const cubeAddition = (numbers) => {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += Math.pow(numbers[i], 3);        
    }
    return sum
}

console.log(cubeAddition([2, 5, 7, 3]));