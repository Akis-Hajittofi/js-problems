# Pseudo Code Solution
function findSumDivisor (number)
    create sum equals to 0
    loop through all the numbers below number
        if the modulo of number by i is 0
            add i to the sum
    return the sum

function amicableNumbers()
    loop through all the numbers below 100,000
        create a sum equals to the result of findSumDivisor(number)
        if the sum is equal to findSumDivisor(sum)
            log both of the numbers
