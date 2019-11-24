//letter is constant throughout this word.js because it is required to call upon certain function
const Letters = require("./letter.js");

function Word(word) {
    var word = word;
    var letters = [];
    var getChar = function (character) {
        Letters.isguessed().forEach(character);
    }
}
