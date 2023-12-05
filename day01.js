import { array } from "./input.js";

const words = ["1abc2", "pqr3stu8vwx", "a1b2c3d4e5f", "treb7uchet"]; //12 38 15 77
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbersIntoWords = []
let firstNumber = '';
let secondNumber = '';

//recorrer el la palabra hasta encontrar el primer numero
const getNumberFromWords = (word) => {
    let numberInWord = '';
    numbers.forEach( number => {
        if (word.includes(number)){
            let indexChar = word.indexOf(number)
            numberInWord +=  word.slice(indexChar, indexChar + 1)
        }
    })
    if(numberInWord.length > 2){
        numberInWord = numberInWord[0] + numberInWord[numberInWord.length - 1];
    }
    if(numberInWord.length === 1){
        numberInWord += numberInWord[0];

    }
    numbersIntoWords.push(Number(numberInWord))
}

array.forEach(string => {
    // console.log(string)
    getNumberFromWords(string);
});

// console.log("number:", numbersIntoWords)
const totalSum = numbersIntoWords.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(totalSum);