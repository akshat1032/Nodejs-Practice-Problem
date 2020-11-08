// 1 -> Take a command-line argument n and print a table of the powers of 2 that are less than or equal to 2^n till 256 is reached.
{
    const prompt = require('prompt-sync')();
    let userInput = Number(prompt("Enter a number to print 2^n : "));
    let index = 0;
    while (index < userInput && Math.pow(2, index) <= 256) {
        console.log("2 ^", index, " : ", Math.pow(2, index));
        index++;
    }
}

//  3 -> Extend the Flip Coin problem till either Heads or Tails wins 11 times.
{
    const IS_HEAD = 1;
    let headCount = 0, tailCount = 0;
    while (headCount < 11 && tailCount < 11) {
        let coinFlipOutcome = Math.floor(Math.random() * 10) % 2;
        if (coinFlipOutcome == IS_HEAD)
            headCount++;
        else
            tailCount++;
    }
    if (headCount == 11)
        console.log("HEAD wins 11 times");
    else
        console.log("TAILS wins 11 times");
}

// 4 -> A gambler starts with Rs 100 and places Re 1 bet until he/she goes broke
{
    const FINAL_AT_WIN = 200, FINAL_AT_LOSS = 1, HAS_WON = 1;
    let initialAmount = 100;
    let countWins = 0, countBets = 0;
    while (initialAmount > FINAL_AT_LOSS && initialAmount < FINAL_AT_WIN) {
        countBets++;
        let outcome = Math.floor(Math.random() * 10) % 2;
        if (outcome == HAS_WON) {
            initialAmount += 1;
            countWins++;
        }
        else
            initialAmount -= 1;
    }
    console.log("Number of bets : ",countBets);
    console.log("Number of wins : ",countWins);
    if(initialAmount == FINAL_AT_WIN)
        console.log("Gambler has won!");
        else
        console.log("Gambler lost :(");
    console.log("Final amount with gambler",initialAmount);
}