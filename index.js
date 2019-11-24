const Word = require("./word.js")
const inquirer = require('inquirer');
var guess = 20;
const words = ["Jurassic Park", "Star Wars", "Mandelorian", "Fast and the Furious", "Bad Boyz II", "Gone with the Wind"];
//this function allows for the guess to reset once the guess has been reset to 20 and then the process starts all over again
function reset() {
    guess = 20;
}
//this is a function that allows the game to restart. If you the user selects yes they will be prompted with prompts and will regenerate the entire test for them to start again. if not the game will terminate and provide a console log message
function restart() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'restart',
                message: "would you like to play again?"
            }
        ])
        .then(answers => {
            if (answers.restart.toLowerCase() == "yes") {
                reset()
                prompts()
            }
            else {
                console.log("Thank you for playing Word Guess. Hope to see you again soon!")
                process.exit();
            }
        });
}
//this function allows for a random word to be generated from the words array above
function Words() {
    var random = Math.floor(Math.random() * words.length);
    var randomword = words[random];
    console.log(randomword);
}

//this function prompts brings up all the prompts for the quiz and ensures the restart occurs as expected
function prompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'guess',
                message: "What letter would you like to guess? You have " + guess-- + " guesses left"
            }
        ])
        .then(answers => {
            console.log("You chose " + answers.guess);
            // console.log(Words());
            //this if statement says that if the guess number equals zero it will console log th statement on line 116 and then ask the user to restart
            if (guess == 0) {
                console.log("You lose! You have " + guess-- + " guesses remaining!");
                restart();
            }
            else {
                prompts();
            }
        });
}
//this function allows for the game to be intialized and to use the prompts function to start the prompts
function initgame() {
    prompts();
};
//this function calls upon initgame to make sure the game runs as intended
initgame();