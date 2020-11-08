//  1 -> Read a single digit number and write the number in word
{
    let singleDigitNumber = Math.floor(Math.random() * 10) % 10;
    let inWord = "";
    switch (singleDigitNumber) {
        case 0:
            inWord = "zero";
            break;
        case 1:
            inWord = "one";
            break;
        case 2:
            inWord = "two";
            break;
        case 3:
            inWord = "three";
            break;
        case 4:
            inWord = "four";
            break;
        case 5:
            inWord = "five";
            break;
        case 6:
            inWord = "six";
            break;
        case 7:
            inWord = "seven";
            break;
        case 8:
            inWord = "eight";
            break;
        case 9:
            inWord = "nine";
            break;
        default:
            inWord = "ERROR!";
    }
    console.log(singleDigitNumber, " in word :", inWord);
}

// 2 -> Read a Number and Display the week day (Sunday, Monday,...)
{
    let weekDay = "";
    let day = new Date().getDay() + 1
    switch (day) {
        case 1:
            weekDay = "Monday";
            break;
        case 2:
            weekDay = "Tuesday";
            break;
        case 3:
            weekDay = "Wednesday";
            break;
        case 4:
            weekDay = "Thursday";
            break;
        case 5:
            weekDay = "Friday";
            break;
        case 6:
            weekDay = "Saturday";
            break;
        case 7:
            weekDay = "Sunday";
            break;
        default:
            weekDay = "ERROR!";
    }
    console.log(day, " is :", weekDay);
}

// 3 -> Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    const prompt = require('prompt-sync')();
    let inputNumber = Number(prompt("Enter a number (1,10,100,1000) :"));
    switch (inputNumber) {
        case 1:
            console.log("Unit");
            break;
        case 10:
            console.log("Ten");
            break;
        case 100:
            console.log("Hundred");
            break;
        case 1000:
            console.log("Thousand");
            break;
        default:
            console.log("Incorrect input");
    }
}

// 4 -> Take User Inputs and do unit conversion of different length units
{
    const prompt = require('prompt-sync')();
    console.log("1. Feet to inch\n2. inch to Feet \n3. Feet to meter\n4. Meter to feet");
    let userChoice = Number(prompt("Enter your choice : "));
    let userInput = Number(prompt("Enter number for unit conversion : "));
    switch (userChoice) {
        case 1:
            console.log(userInput, " feet in inch : ", userInput * 12, " inch");
            break;
        case 2:
            console.log(userInput, "inch in feet : ", userInput * 0.083, " feet");
            break;
        case 3:
            console.log(userInput, " feet in m : ", userInput * 0.304, " m");
            break;
        case 4:
            console.log(userInput, " m in feet : ", userInput * 3.28, " feet");
            break;
        default:
            console.log("Wrong choice!");
    }
}