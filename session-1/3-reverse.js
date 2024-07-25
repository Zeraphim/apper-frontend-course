/*

Write a function named reverse that, when given an input string, returns the reversed version of that string. Use traditional for loop. Name this file

*/

function reverse(word) {
    try {
        // If word is not a string then return an error
        if (typeof word !== 'string') {
            throw new TypeError('Input must be a string');
        }

        // String var to place all of the reversed characters
        let reversed = '';

        // Loop through the word from the last character to the first character
        for (let iterator = word.length - 1; iterator >= 0; iterator--) {
            // Concatenate the characters to the reversed variable
            reversed += word[iterator];
        }

        return reversed;

    } catch (error) {
        // If there's an error, log the error message to the console
        console.error('Error:', error.message);
    }
}

const word = 'hello'
const reversedWord = reverse(word)
console.log(reversedWord) // 'olleh'