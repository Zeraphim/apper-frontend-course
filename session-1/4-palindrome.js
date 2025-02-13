/*

Write a function called isPalindrome, that when given a string input, returns True if the string input is a palindrome, else False. A palindrome is a word that, when reversed, is the same word. Examples include racecar, deified, civic, radar, uwu, et al. Name this file 4-palindrome.js.

*/

function isPalindrome(word) {

    try {
        // If word is not a string then return an error
        if (typeof word !== 'string') {
            throw new TypeError('Input must be a string');
        }

        // Variable to store the reversed letters in the word
        const reversedWord = word.split('').reverse().join('');

        return word === reversedWord;

    } catch (error) {

        // If there are errors then show the error in the log
        console.error(error.message);
        
        return false;

    }
}

const word = 'racecar'
if (isPalindrome(word)) {
  console.log('It is a palindrome!')
} else {
  console.log('It is not a palindrome!')
}