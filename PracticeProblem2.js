//  1 -> Read a single digit number and write the number in word
{
    let singleDigitNumber = Math.floor(Math.random() * 10) % 10;
    let inWord = "";
    if (singleDigitNumber == 0)
        inWord = "zero";
    else if (singleDigitNumber == 1)
        inWord = "one";
    else if (singleDigitNumber == 2)
        inWord = "two";
    else if (singleDigitNumber == 3)
        inWord = "three";
    else if (singleDigitNumber == 4)
        inWord = "four";
    else if (singleDigitNumber == 5)
        inWord = "five";
    else if (singleDigitNumber == 6)
        inWord = "six";
    else if (singleDigitNumber == 7)
        inWord = "seven";
    else if (singleDigitNumber == 8)
        inWord = "eight";
    else
        inWord = "nine";
    console.log(singleDigitNumber, " in word :", inWord);
}

// 2 -> Read a Number and Display the week day (Sunday, Monday,...)
{
    let day = Math.floor(Math.random() * 10) % 7;
    let weekDay = "";
    if (day == 1)
        weekDay = "Monday";
    else if (day == 2)
        weekDay = "Tuesday";
    else if (day == 3)
        weekDay = "Wednesday";
    else if (day == 4)
        weekDay = "Thursday";
    else if (day == 5)
        weekDay = "Friday";
    else if (day == 6)
        weekDay = "Saturday";
    else
        weekDay = "Sunday";
    console.log(day, " is :", weekDay);
}

// 3 -> Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
{
    const prompt = require('prompt-sync')();
    let inputNumber = prompt("Enter a number (1,100,1000) : ");
    if (inputNumber == 1)
        console.log("Unit");
    else if (inputNumber == 10)
        console.log("Ten");
    else if (inputNumber == 100)
        console.log("Hundred");
    else if (inputNumber == 1000)
        console.log("Thousand");
    else
        console.log("Incorrect input");
}

//   4 -> Enter 3 numbers and do arithmetic operation and find the one thatis maximum and minimum
{
    const prompt = require('prompt-sync')();
    let num1 = prompt("Enter a number : ");
    let num2 = prompt("Enter a number : ");
    let num3 = prompt("Enter a number : ");
    let operation1 = console.log("Operation 1 : ", num1 + num2 * num3);
    let operation2 = console.log("Opeartion 2 : ", num3 + num1 / num2);
    let operation3 = console.log("Operation 3 : ", num1 % num2 + num3);
    let operation4 = console.log("Operation 4 : ", num1 * num2 + num3);
    if (num1 > num2 && num1 > num3)
        console.log("Maximum is : ", num1);
    else if (num2 > num1 && num2 > num3)
        console.log("Maximum is : ", num2);
    else
        console.log("Maximum is : ", num3);
    if (num1 < num2 && num1 < num3)
        console.log("Minimum is : ", num1);
    else if (num2 < num1 && num2 < num3)
        console.log("Minimum is : ", num2);
    else
        console.log("Minimum is : ", num3);
}
