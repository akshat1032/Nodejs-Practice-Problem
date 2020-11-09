//  1 -> Program to second largest and second smallest numbers
{
    let numberArray = new Array();
    let number = 0;
    for (let index = 0; index < 10; index++) {
        do {
            number = Math.floor(Math.random() * 999);
        } while (number < 100);
        numberArray.push(number);
    }
    let minimumIndex = numberArray.indexOf(Math.min(...numberArray));
    let copySecondMin = numberArray.slice();
    copySecondMin.splice(minimumIndex, 1);
    console.log("Second smallest number in the array " + numberArray + " is : " + Math.min(...copySecondMin));

    let maximumIndex = numberArray.indexOf(Math.max(...numberArray));
    let copySecondMax = numberArray.slice();
    copySecondMax.splice(maximumIndex, 1);
    console.log("Second largest number in the array " + numberArray + " is : " + Math.max(...copySecondMax));

    // 2 -> Program to second largest and second smallest numbers with sorting
    numberArray.sort();
    console.log("Second smallest number in the array " + numberArray + " is : " + numberArray[1]);
    console.log("Second largest number in the array " + numberArray + " is : " + numberArray[numberArray.length - 2]);
}

// 3 -> Storing prime factors into an array and displaying the output
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number to find prime factors : "));
    let primeFactorArray = new Array();
    for (let factor = 2; factor * factor <= userInput; factor++) {
        let countForFactor = 0;
        for (let number = 2; number < factor; number++) {
            if (factor % number == 0)
                countForFactor++;
        }
        if (countForFactor == 0 && userInput % factor == 0)
            primeFactorArray.push(factor);
    }
    console.log(`Prime factors of ${userInput} : ${primeFactorArray}`);
}
//  5 -> Taking a range from 0-100 and finding digits which are repeated twice
{
    let rangeArray = new Array(100);
    for (let index = 0; index < rangeArray.length; index++) {
        rangeArray[index] = index;
    }
    let repeatedDigitsArray = rangeArray.filter(findRepeatedDigit);

    //  Function to find numbers with repeated digits
    function findRepeatedDigit(number) {
        let tempNumber = number;
        if (number > 10) {
            let lastDigit = number % 10;
            number = parseInt(number / 10);
            let firstDigit = number % 10;
            if (lastDigit == firstDigit)
                return tempNumber;
        }
    }
    console.log("Numbers with repeated digits : "+repeatedDigitsArray);
}
