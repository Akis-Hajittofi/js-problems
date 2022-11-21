# Pseudo Code Solution
function findRange (list of numbers)
    create smallest with Max Value
    create biggest with Min Value
    for i equals 0, as long as we're in the array, i++
        if the number is bigger the the biggest number so far
            biggest equals number
        if the number is smaller than the smallest so far
            smallest equals number
    return biggest - smallest