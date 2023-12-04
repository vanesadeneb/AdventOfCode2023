import { array } from "./input.js";

// const words = ["1abc2", "pqr3stu8vwx"]; //12 38
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbersIntoWords = []


const getNumberFromWords = (word) => {
    let numberInWord = '';
    numbers.forEach( number => {
        // console.log(word.includes(number))
        if (word.includes(number)){
            let x = word.indexOf(number)
            // console.log(x)
            numberInWord +=  word.slice(x, x + 1)
        }
    })

    numbersIntoWords.push(Number(numberInWord))
}

array.forEach(string => {
    // console.log(string)
    getNumberFromWords(string);
});

console.log("number:", numbersIntoWords)
const totalSum = numbersIntoWords.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(totalSum);