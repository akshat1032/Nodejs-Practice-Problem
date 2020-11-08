//  1 -> Find degF or degC based on their Conversion Selection.
{
    const prompt = require('prompt-sync')();
    console.log("Choice\n1. Celsius to Fahrenheit\n2. Fahrenheit to Celsius");
    let userChoice = Number(prompt("Enter choice for conversion : "));
    switch (userChoice) {
        case 1:
            let celsiusTemp = Number(prompt("Enter celsius temperature to covert to Fahrenheit : "));
            if (celsiusTemp >= 0 && celsiusTemp <= 100) {
                let temperature = celsiusToFahrenheit(celsiusTemp);
                console.log(celsiusTemp, "degC in fahrenheit :", temperature, "degF");
                break;
            }
            else
                break;
        case 2:
            let fahrenheitTemp = Number(prompt("Enter fahrenheit temperature to covert to Celsius : "));
            if (fahrenheitTemp >= 32 && fahrenheitTemp <= 212) {
                let temperature = fahrenheitToCelsius(fahrenheitTemp);
                console.log(fahrenheitTemp, "degF in Celsius :", temperature, "degC");
                break;
            }
            else
                break;
        default:
            console.log("Wrong Choice!");
            break;
    }
    // function to convert from celsius to fahrenheit
    function celsiusToFahrenheit(celsiusTemp) {
        return (celsiusTemp * 9 / 5) + 32;
    }
    //  function to convert from fahrenheit to celsius
    function fahrenheitToCelsius(fahrenheitTemp) {
        return (fahrenheitTemp - 32) * 5 / 9;
    }
}

// 2 -> Function to check if the two numbers are Palindromes
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number to check if it is a palindrome : "));
    let isPalindrome = checkForPalindrome(userInput);
    if (isPalindrome)
        console.log(userInput, "is Palindrome.");
    else
        console.log(userInput, "is not Palindrome.");

    // function to check for palindrome
    function checkForPalindrome(userInput) {
        let tempUserInput = userInput;
        let reverseNum = 0;
        while (userInput > 0) {
            reverseNum = reverseNum * 10 + userInput % 10;
            userInput = Math.floor(userInput / 10);
        }
        console.log(reverseNum + " " + tempUserInput);
        if (reverseNum == tempUserInput)
            return true;
        else
            return false;
    }
}

// 3 -> Take a number from user and check if the number is a Prime then show that its palindrome is also prime
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number : "));
    let isPrime = checkForPrime(userInput);
    if (isPrime) {
        let reverseOfNumber = getPalindrome(userInput);
        let isPalindromePrime = checkForPrime(reverseOfNumber);
        if (isPalindromePrime)
            console.log(userInput, " and palindrome ", reverseOfNumber, " are prime.");
        else
            console.log(userInput, " is prime, whereas palindrome", reverseOfNumber, "is not prime");
    }
    else
        console.log(userInput, "is not prime");
    
    // Function to check for prime number
    function checkForPrime(number) {
        let count = 0;
        for (let factor = 2; factor < number; factor++) {
            if (number % factor == 0)
                count++;
        }
        if (count == 0)
            return true;
        else
            return false;
    }

    // Function to get palindrome
    function getPalindrome(number) {
        let reverseNum = 0;
        while (number > 0) {
            reverseNum = reverseNum * 10 + number % 10;
            number = Math.floor(number / 10);
        }
        return reverseNum;
    }
}