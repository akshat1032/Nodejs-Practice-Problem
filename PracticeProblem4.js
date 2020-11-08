//  1 -> Take a command-line argument n and print a table of the powers of 2 that are less than or equal to 2^n.
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number to print 2^n : "));
    for (let index = 0; index <= userInput; index++) {
        console.log("2 ^", index, " : ", Math.pow(2, index));
    }
}

// 2 -> Take a command-line argument n and print the nth harmonic number.
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number to print harmonic number : "));
    let harmonicNumber = 0;
    for (let index = 1; index <= userInput; index++) {
        harmonicNumber += 1 / index;
    }
    console.log("Nth harmonic number : ", harmonicNumber);
}

// 3 -> Take a input and determine if the number is a prime.
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number to check for prime : "));
    let count = 0;
    for (let number = 2; number <= userInput; number++) {
        if (userInput % number == 0)
            count++;
    }
    if (count == 1)
        console.log(userInput, " is Prime Number.");
    else
        console.log(userInput, " is not Prime Number.");
}

// 4 -> Take a range of number as input and output the Prime Numbers in that range.
{
    const prompt = require('prompt-sync')();
    let beginRange = Number(prompt("Enter beginning of range for prime numbers : "));
    let endRange = Number(prompt("Enter end of range for prime numbers : "));
    console.log("Prime numbers between", beginRange, "and", endRange);
    for (let number = beginRange; number <= endRange; number++) {
        let countForFactor = 0;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor == 0)
                countForFactor++;
        }
        if (countForFactor == 0)
            console.log(number);
    }
}

// 5 -> Compute a factorial of a number taken as input.
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number to find factorial : "));
    let factorial = 1;
    for (let number = 1; number <= userInput; number++) {
        factorial *= number;
    }
    console.log("Factorial of ", userInput, " : ", factorial);
}

// 6 -> Compute factors of a number N using prime factorization method.
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number to find prime factors : "));
    console.log("Prime factors of ",userInput);
    for (let factor = 2; factor * factor <= userInput; factor++) {
        let countForFactor = 0;
        for (let number = 2; number < factor; number++) {
            if (factor % number == 0)
                countForFactor++;
        }
        if (countForFactor == 0 && userInput % factor == 0)
            console.log(factor);
    }
}