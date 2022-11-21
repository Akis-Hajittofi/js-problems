const rounding = (number) => {  
    let string = number.toString();
    console.log(string);
    if((number * 10)%10 !== 0)
    {
        if(string[string.length - 1] < 5)
            return parseInt(string);
        else
            return parseInt(string) +1; 
    }
    else
    return number;
}

const mileTravelled = (time, speed) =>{return speed * time / 60;}

console.log(rounding(mileTravelled(30, 6)));