const stringToReverse = 'Brandon'

//? To reverse a string, we need to convert it into an array, reverse the array and join the array back into a string

const reverseStringWithReverseMethod = (string) => {
    return string.split('').reverse().join('')
};



const reverseString = (string) => {
    //* Create an empty string
    let reversedStringFromForOf = '';

    //* for of loop
    for (let letter of string) {
        reversedStringFromForOf = letter + reversedStringFromForOf
    }
    return reversedStringFromForOf
};

const reverseReduce = stringToReverse.split('').reduce((reversed, character) => character + reversed, '');



console.log('Reverse Built in Array Method',reverseStringWithReverseMethod(stringToReverse));
console.log('For of Loop',reverseString(stringToReverse));
console.log('Reduce Method', reverseReduce);