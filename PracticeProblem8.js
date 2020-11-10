// 1 -> Program to roll dice and find the number which reached maximum and minimum times
let diceRollMap = new Map();
let diceOutcome;
for (let i = 1; i < 7; i++) {
    diceRollMap.set(i, 0);
}
do {
    diceOutcome = Math.floor(Math.random() * 10) % 6 + 1;
    diceRollMap.set(diceOutcome, diceRollMap.get(diceOutcome) + 1);
} while (diceRollMap.get(diceOutcome) < 10);
console.log("Dice roll")
for (let [key, value] of diceRollMap.entries()) {
    console.log(key + " " + value);
}
console.log("Maximum occurrence :", [...diceRollMap.entries()].reduce((a, e) => e[1] > a[1] ? e : a));
console.log("Minimum occurrence :", [...diceRollMap.entries()].reduce((a, e) => e[1] < a[1] ? e : a));

// 2 -> Program to get birth month of 50 individuals and find individuals with same birth month
{
    let birthMonth = new Map();
    for (let i = 1; i <= 12; i++) {
        birthMonth.set(i, 0);
    }
    for (let j = 0; j < 50; j++) {
        individualBirthMonth = Math.floor(Math.random() * 12) + 1;
        birthMonth.set(individualBirthMonth, birthMonth.get(individualBirthMonth) + 1);
    }
    console.log("Birth Month Map of 50 Individuals")
    for (let [key, value] of birthMonth.entries()) {
        console.log(key + " " + value);
    }
}
