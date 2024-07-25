/*

Write a function that returns only vowels with a given input string. Name this function convertToVowels. Name this file 5-vowels.js.

*/

function convertToVowels(word) {
    try {
        // If word is not a string then throw an error
        if (typeof word !== 'string') {
            throw new TypeError('Input must be a string');
        }

        // Match vowels in the input string, searches through the word for matches in the regex. [Global flag and Case-Insensitive Flag]
        const vowelsArray = word.match(/[aeiou]/gi);

        // Check if the result is not null
        if (vowelsArray) {
            // Join array of vowels into a string
            return vowelsArray.join('');
        } else {
            // Return empty string if no vowels are found
            return '';
        }

    } catch (error) {
        // If there's an error show the error in the terminal
        console.error('Error:', error.message);
        return '';

    }
}

const word = 'thisissomeword'
const wordWithOnlyVowels = convertToVowels(word)
console.log(wordWithOnlyVowels) // iioeo