____________
Objective
____________

The objective of this project was to create a word guess game using constructors in javascript to create  word guess game.
I utilized inquirer to create the prompts and the restart function for the game to continue on should the player choose to 
play again

_____________
What I am having difficulty on
_____________

The letter and words.js were create and the functions were created as expected but the issue i am having is pushing the blank values along with the blank word to the index.js
what i encounter is an error dealing with space once i try to use it and i cannot get letter.js and word.js and their functions to work with index.js
I am also having difficulty on some of the functions and everything needing to be called upon by letter and word.js
    ________________
    for word js having issues with the following entries:
    ________________

    * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

    * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)

    _______________
    For letter.js having the following issues:
    _______________
    
    * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly

______________

what i completed
______________

i completed the ability for the game to start 
I was able to complete the game's ability to restart the game should the user accept it 
i was able to get th game to return the value of the input that the person enters 
I was able to complete the game's ability to reset the guess counter to 20 when the user decides to restart the game

______________

Demonstration

______________

Inside the repo is mov video showing the demonstration of the application. It demonstrated the completed sections of the game and shows both the restart function and what happens when 
a user opts out of restarting the game. Outstanding issues to fix are the pushing of guesses and the integration of the words and letter.js with index.js. All package.json files are up to date with information 
on the inquirer version used