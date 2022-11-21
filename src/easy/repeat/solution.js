const repeatLetter = (string) => {
    let newString = ''
    for(let i = 0; i< string.length; i++)
    {
        newString += string[i];
        newString += string[i];
    }
    return newString;
}


console.log(repeatLetter("test"));
console.log(repeatLetter("157]"));
console.log(repeatLetter("Hello World"));