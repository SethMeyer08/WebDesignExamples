let maximum = parseInt(prompt("Enter the maximum number!"));

while(!maximum) {
    maximum = parseInt(prompt("Enter the valid number!"));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;

let guess = parseInt(prompt("Enter your first guess..."));
let attempts = 1;

while (parseInt(guess) !== targetNum) {
    if (guess === 'q') break;
    attempts++;
    if (guess > targetNum) {
        guess = prompt("Too high! Guess again: ");
    } else {
        guess = prompt("Too low! Guess again: ");
    }
}

if (guess === 'q'){
    console.log("Okay! I get it. Time to quit playing...")
} else {
    console.log(`You got it! It took you ${attempts} guesses!`);
}