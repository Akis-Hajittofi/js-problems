const mileConvert = (km) => {   return km * 1.6 ;}

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

console.log(rounding(mileConvert(5.5)));