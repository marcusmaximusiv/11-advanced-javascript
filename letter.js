function Letters(letters) {
    //we are using the letters variable required by the Letters function and having it store the letter defined
    var letters = letters;
    //guessed is the boolean value showing if the letter was guessed incorrectly or correctly
    var guessed = false;
    //is guessed function has an if else statement saying if the guess is true to console log a blank value and if 
    var isguessed = function (guessed) {
        if (guessed === false) {
            console.log("_");
            return "_";
        }
        else {
            console.log(letters);
            return letters;
        }
    }
    //get character validates if the letters guessed is equal to the entry that the user guesses
    var getChar = function (guess) {
        if (letters === guess) {
            isguessed === true;
        }
        else {
            isguessed === false;
        }
    }
}
//module is exported as Letters
module.exports = Letters;

