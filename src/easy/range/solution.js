const findRange = (number) => {
    let smallest = Number.MAX_VALUE;
    let biggest = Number.MIN_VALUE;
    for(let i = 0; i<number.length; i++)
    {
        if(number[i] > biggest)
        {   biggest = number[i];}
        if(number[i] < smallest)
        {   smallest = number[i];}
    }

    return biggest - smallest
}


console.log(findRange([7, 5, 8, 4, 3, 2, 6, 2]))