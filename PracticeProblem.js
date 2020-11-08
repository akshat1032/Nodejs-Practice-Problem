// 1 -> Read 5 Random 3 Digit values and then outputs the minimum and the maximum value
{
    let num1 = Math.floor(Math.random() * 1000);
    let num2 = Math.floor(Math.random() * 1000);
    let num3 = Math.floor(Math.random() * 1000);
    let minimum = 0;
    let maximum = 0;
    if (num1 < num2) {
        if (num1 < num3)
            minimum = num1;
        else
            minimum = num3;
    }
    else {
        if (num2 < num3)
            minimum = num2;
        else
            minimum = num3;
    }
    if (num1 > num2) {
        if (num1 > num3)
            maximum = num1;
        else
            maximum = num3;
    }
    else {
        if (num2 > num3)
            maximum = num2;
        else
            maximum = num3;
    }
    console.log("Minimum out of ", num1, ", ", num2, ", ", num3, " : ", minimum, "\nMaximum out of ", num1, ", ", num2, ", ", num3, " : ", maximum);
}

// 2 -> Take day and month from the command line and prints true if day of month is between March 20 and June 20, false otherwise.
{
    const prompt = require('prompt-sync')();
    let day = prompt("Enter day of the month : ");
    let month = prompt("Enter month of the year : ");
    if (day >= 20 && day <= 31 && month.match("[Mm][Aa][Rr][Cc][Hh]")
        || day >= 1 && day <= 20 && month.match("[Jj][Uu][Nn][Ee]"))
        console.log("True");
    else
        console.log("False");
}

// 3 -> Take a year as input and outputs the Year is a Leap Year or not a Leap Year.
{
    const prompt = require('prompt-sync')();
    let year = prompt("Enter the year : ");
    if (year % 4 == 0) {
        if (year % 100 == 0) {
            if (year % 400 == 0)
                console.log(year, " is Leap Year.");
            else
                console.log(year, " is not a Leap Year.");
        }
        else
            console.log(year, " is Leap Year.");
    }
}

//  4 -> Simulate a coin flip and print out "Heads" or "Tails" accordingly.
{
    const IS_HEAD = 1;
    let coinFlipOutcome = Math.floor(Math.random() * 10) % 2;
    if (coinFlipOutcome == IS_HEAD) {
        console.log("HEADS");
    } else {
        console.log("TAILS");
    }
}