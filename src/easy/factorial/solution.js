const factorial = (number) => { 
    let sum = 1;
    for(i = number; i>= 1; i--)
    {   sum *= i;}
    return sum;
}

console.log(factorial(5));